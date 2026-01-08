
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_PROMPT = `
You are Serenity, an AI mental health companion designed specifically for women. 
Your tone is empathetic, non-judgmental, warm, and supportive. 
You are NOT a doctor or therapist. You cannot provide medical diagnoses or treatment plans.
Focus on:
1. Active listening.
2. Validating the user's feelings.
3. Suggesting gentle self-care activities (breathing, journaling, walking).
4. Providing culturally sensitive support for women (mothers, students, workers).
5. Recognizing crisis situations (suicide, self-harm, abuse) and immediately providing the helpline resource: "It sounds like you're going through a lot. Please reach out to our Emergency page or call a professional hotline immediately."

Never use complex clinical jargon. Use simple, comforting language.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'assistant', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const contents = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.text }]
  }));

  // Add the current message
  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting right now, but I'm still here for you. Can you try again in a moment?";
  }
};

export const analyzeMood = async (journalText: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the sentiment and primary emotion of this journal entry. Return JSON format.
      Journal Entry: "${journalText}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            emotion: { type: Type.STRING, description: "Joyful, Calm, Anxious, Sad, Overwhelmed, or Angry" },
            intensity: { type: Type.NUMBER, description: "1-10" },
            advice: { type: Type.STRING, description: "A short supportive sentence." }
          },
          required: ["emotion", "intensity", "advice"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Analysis Error:", error);
    return null;
  }
};
