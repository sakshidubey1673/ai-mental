
import React, { useState } from 'react';
import { Search, Filter, BookOpen, Video, Headphones, ExternalLink } from 'lucide-react';

const categories = ['All', 'Self-Care', 'Anxiety', 'Postpartum', 'Work-Life', 'Students'];

const resources = [
  {
    title: "Understanding High-Functioning Anxiety",
    category: "Anxiety",
    type: "Article",
    image: "https://picsum.photos/seed/res1/400/250",
    readTime: "6 min read"
  },
  {
    title: "Gentle Stretching for Working Moms",
    category: "Self-Care",
    type: "Video",
    image: "https://picsum.photos/seed/res2/400/250",
    readTime: "12 min watch"
  },
  {
    title: "Navigating Stigma in Rural Communities",
    category: "Social",
    type: "Article",
    image: "https://picsum.photos/seed/res3/400/250",
    readTime: "8 min read"
  },
  {
    title: "Guided Meditation for Better Sleep",
    category: "Self-Care",
    type: "Audio",
    image: "https://picsum.photos/seed/res4/400/250",
    readTime: "15 min listen"
  },
  {
    title: "Finding Balance: Student Life Guide",
    category: "Students",
    type: "Guide",
    image: "https://picsum.photos/seed/res5/400/250",
    readTime: "10 min read"
  },
  {
    title: "Postpartum Wellness Checklist",
    category: "Postpartum",
    type: "Resource",
    image: "https://picsum.photos/seed/res6/400/250",
    readTime: "5 min read"
  }
];

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResources = activeTab === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Wellness Library</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Expert-curated resources tailored for women's mental health at every stage of life.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for topics, articles, or guides..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-pink-100 bg-white focus:ring-2 focus:ring-pink-200 outline-none"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                activeTab === cat ? 'bg-pink-600 text-white' : 'bg-white text-gray-600 border border-pink-100 hover:bg-pink-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden border border-pink-50 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pink-600">
                {item.type}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">{item.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-snug">{item.title}</h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> {item.readTime}
                </span>
                <button className="text-pink-600 font-bold text-sm flex items-center gap-1 hover:underline">
                  View <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
