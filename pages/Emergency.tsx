
import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, MapPin, LifeBuoy } from 'lucide-react';

const Emergency: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-red-50 border-2 border-red-200 rounded-[2rem] p-8 md:p-12 mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-red-200">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-red-900 mb-4">Urgent Help Needed?</h1>
          <p className="text-red-700 text-xl max-w-2xl mb-8 font-medium">
            If you or someone you know is in immediate danger or experiencing a life-threatening crisis, please use the contacts below. You are not alone.
          </p>
          <a 
            href="tel:988" 
            className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-200"
          >
            <Phone className="w-8 h-8" /> Call 988 (Mental Health Crisis)
          </a>
        </div>
        {/* Visual Cue */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <LifeBuoy className="w-6 h-6 text-pink-600" />
            Helplines by Country
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800">United States</h4>
              <p className="text-gray-600 text-sm">Crisis Text Line: Text HOME to 741741</p>
              <p className="text-gray-600 text-sm">Suicide Prevention: 1-800-273-8255</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">India</h4>
              <p className="text-gray-600 text-sm">Vandrevala Foundation: 9999 666 555</p>
              <p className="text-gray-600 text-sm">iCall (TISS): 022-25521111</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">United Kingdom</h4>
              <p className="text-gray-600 text-sm">Samaritans: 116 123</p>
              <p className="text-gray-600 text-sm">NHS: 111</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-pink-600" />
            Specialized Support
          </h2>
          <div className="space-y-6">
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <h4 className="font-bold text-purple-900">Domestic Violence</h4>
              <p className="text-purple-700 text-sm">The National Hotline (US): 1-800-799-SAFE (7233)</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-900">Postpartum Support</h4>
              <p className="text-teal-700 text-sm">PSI HelpLine: 1-800-944-4773</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-10 rounded-[2rem]">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-pink-500" />
          Find Local Care
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Enter your location to find verified clinics, women's centers, and therapists in your immediate area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="City or Zip Code" 
            className="flex-grow bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
