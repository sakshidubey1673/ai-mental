
export type MoodType = 'Joyful' | 'Calm' | 'Anxious' | 'Sad' | 'Overwhelmed' | 'Angry';

export interface MoodEntry {
  id: string;
  date: string;
  mood: MoodType;
  journal: string;
  intensity: number; // 1-10
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Resource {
  id: string;
  title: string;
  category: 'Self-Care' | 'Therapy' | 'Wellness' | 'Safety';
  description: string;
  link: string;
  image: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
}
