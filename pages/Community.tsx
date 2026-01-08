
import React from 'react';
import { MessageSquare, Heart, Share2, PlusCircle, Filter } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    author: 'Aanya M.',
    role: 'Student',
    time: '2 hours ago',
    content: "Just finished my first year finals. The pressure was insane but talk therapy really helped me stay grounded. If you're struggling, please know you're not alone!",
    likes: 24,
    comments: 8,
    tags: ['StudentLife', 'Encouragement']
  },
  {
    id: '2',
    author: 'Sarah P.',
    role: 'New Mother',
    time: '5 hours ago',
    content: "Is it normal to feel so disconnected sometimes? Sleep deprivation is real. Looking for advice from other moms who navigated the 3-month slump.",
    likes: 42,
    comments: 15,
    tags: ['Motherhood', 'Postpartum']
  },
  {
    id: '3',
    author: 'Dr. Priya V.',
    role: 'Verified Expert',
    time: '1 day ago',
    content: "Tip for the week: Set a digital sunset. No screens 45 minutes before bed to allow your nervous system to calm down. Who's joining me in this challenge?",
    likes: 156,
    comments: 34,
    tags: ['Wellness', 'ExpertTip']
  }
];

const Community: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold text-gray-900">Community Spaces</h1>
          <p className="text-gray-600">A safe, moderated forum to connect with other women.</p>
        </div>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-pink-700 transition-colors shadow-lg shadow-pink-100">
          <PlusCircle className="w-5 h-5" /> New Post
        </button>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {['Feed', 'Student Circle', 'Mothers Hub', 'Career Women', 'Rural Support'].map((tab, i) => (
          <button 
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              i === 0 ? 'bg-pink-50 text-pink-600 border border-pink-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-3xl border border-pink-50 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">
                  {post.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    {post.author}
                    {post.role === 'Verified Expert' && <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full">Expert</span>}
                  </h4>
                  <span className="text-xs text-gray-500">{post.role} • {post.time}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-pink-600">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-pink-400 bg-pink-50 px-3 py-1 rounded-full uppercase tracking-wider">#{tag}</span>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 font-medium">
                <Heart className="w-5 h-5" /> {post.likes}
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium">
                <MessageSquare className="w-5 h-5" /> {post.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
