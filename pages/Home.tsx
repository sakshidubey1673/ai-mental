
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Shield, Users, ArrowRight, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full mb-6 font-medium border border-pink-100">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Empathetic Care</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Your Space to <span className="text-pink-600">Thrive</span>, Not Just Survive.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              An AI-driven ecosystem dedicated to the mental well-being of every woman. 
              Safe, confidential, and always here to listen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/chat"
                className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200 flex items-center justify-center gap-2"
              >
                Talk to Serenity <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                to="/dashboard"
                className="bg-white text-gray-800 border-2 border-pink-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all flex items-center justify-center"
              >
                Track Your Mood
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800" 
                alt="Supportive Atmosphere" 
                className="w-full h-auto"
              />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Stats/Problem Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why SereneHer?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Addressing the unique challenges women face—from postpartum depression and workplace discrimination to rural accessibility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50/50 p-8 rounded-3xl border border-pink-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Confidential</h3>
              <p className="text-gray-600">Your data is anonymized and encrypted. Your journey is yours alone to share.</p>
            </div>
            <div className="bg-pink-50/50 p-8 rounded-3xl border border-pink-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empathetic AI</h3>
              <p className="text-gray-600">Our models are trained specifically on empathetic datasets to ensure a warm, supportive tone.</p>
            </div>
            <div className="bg-pink-50/50 p-8 rounded-3xl border border-pink-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peer Support</h3>
              <p className="text-gray-600">Connect with others who understand. Join safe spaces for students, mothers, and workers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-pink-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">You don't have to carry it all alone.</h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">Join thousands of women who are finding peace, one conversation at a time.</p>
            <Link 
              to="/chat" 
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-xl"
            >
              Start Free Chat <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-white/10 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
