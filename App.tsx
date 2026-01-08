
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import ResourcesPage from './pages/Resources';
import Community from './pages/Community';
import Emergency from './pages/Emergency';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer className="bg-pink-50 border-t border-pink-100 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-pink-800 mb-4">SereneHer</h3>
              <p className="text-gray-600 max-w-sm">
                Empowering women through AI-driven mental health support. Accessible, empathetic, and confidential.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#/chat" className="hover:text-pink-600">AI Support</a></li>
                <li><a href="#/dashboard" className="hover:text-pink-600">Mood Tracking</a></li>
                <li><a href="#/community" className="hover:text-pink-600">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#/emergency" className="text-red-600 font-semibold hover:underline">Emergency Help</a></li>
                <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-pink-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SereneHer. Not a substitute for professional medical advice.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
