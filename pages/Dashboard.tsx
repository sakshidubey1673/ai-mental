
import React, { useState } from 'react';
// Added missing Link import
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Plus, Smile, Meh, Frown, Sparkles, AlertCircle, Bookmark } from 'lucide-react';
import { MoodEntry, MoodType } from '../types';
import { analyzeMood } from '../services/geminiService';

const mockMoodData = [
  { day: 'Mon', value: 7 },
  { day: 'Tue', value: 5 },
  { day: 'Wed', value: 8 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 6 },
  { day: 'Sat', value: 9 },
  { day: 'Sun', value: 8 },
];

const Dashboard: React.FC = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [journal, setJournal] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<{emotion: string, intensity: number, advice: string} | null>(null);

  const handleJournalSubmit = async () => {
    if (!journal.trim()) return;
    setIsAnalyzing(true);
    const result = await analyzeMood(journal);
    if (result) {
      setAnalysis(result);
      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        mood: result.emotion as MoodType,
        journal: journal,
        intensity: result.intensity
      };
      setEntries([newEntry, ...entries]);
    }
    setIsAnalyzing(false);
    setJournal('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Welcome Back, Sara</h1>
        <p className="text-gray-600">Here's a look at your wellness journey this week.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Mood Log */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-500" />
                Weekly Progress
              </h2>
              <span className="text-sm text-gray-500">Last 7 Days</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockMoodData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis hide domain={[0, 10]} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    labelStyle={{fontWeight: 'bold', color: '#be185d'}}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#db2777" 
                    strokeWidth={4} 
                    dot={{fill: '#db2777', strokeWidth: 2, r: 6, stroke: '#fff'}}
                    activeDot={{r: 8}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Emotional Journal
            </h2>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="How are you really doing today? Reflect on your day..."
              className="w-full bg-pink-50/30 border border-pink-100 rounded-2xl p-6 min-h-[160px] focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none mb-4"
            />
            <button
              onClick={handleJournalSubmit}
              disabled={!journal.trim() || isAnalyzing}
              className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
            >
              {isAnalyzing ? 'Analyzing with Serenity...' : <><Plus className="w-5 h-5" /> Save Entry</>}
            </button>

            {analysis && (
              <div className="mt-6 p-4 bg-pink-50 rounded-2xl border border-pink-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-pink-800">Detected Mood: {analysis.emotion}</span>
                  <span className="text-sm bg-white px-2 py-0.5 rounded-full border border-pink-200 text-pink-600">Intensity {analysis.intensity}/10</span>
                </div>
                <p className="text-pink-700 italic">"{analysis.advice}"</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg">Recent Entries</h3>
            {entries.length === 0 ? (
              <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-2xl border border-dashed">
                No entries yet. Start your first journal reflection above!
              </div>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{entry.mood}</span>
                      <span className="text-xs text-gray-400">{entry.date}</span>
                    </div>
                    <Bookmark className="w-4 h-4 text-gray-300" />
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{entry.journal}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Insights & Quick Actions */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-3xl text-white shadow-xl shadow-pink-100">
            <h3 className="text-xl font-bold mb-4">Wellness Tip</h3>
            <p className="text-pink-50 mb-6 leading-relaxed">
              Research shows that just 5 minutes of focused breathing can lower cortisol levels by 20%. Try the Box Breathing technique today.
            </p>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold hover:bg-pink-50 transition-colors">
              Try it now
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Recommended for You</h3>
            <div className="space-y-4">
              {[
                { title: 'Managing Work Stress', tag: 'Article', color: 'bg-blue-100 text-blue-700' },
                { title: '10 Min Morning Yoga', tag: 'Video', color: 'bg-green-100 text-green-700' },
                { title: 'Postpartum Support Group', tag: 'Community', color: 'bg-purple-100 text-purple-700' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
                    {item.tag}
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
            <div className="flex items-center gap-2 text-orange-700 font-bold mb-2">
              <AlertCircle className="w-5 h-5" />
              Need Help Now?
            </div>
            <p className="text-orange-600 text-sm mb-4">
              If you are feeling overwhelmed or unsafe, please reach out to professional help immediately.
            </p>
            {/* Added Link component usage correctly */}
            <Link 
              to="/emergency" 
              className="text-orange-800 font-bold underline hover:text-orange-900"
            >
              Access Crisis Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
