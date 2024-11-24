import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/90 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Your Perfect Career Match
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          InclusionHub connects talented individuals with inclusive employers who value diversity and equal opportunities.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#C3A4D9]"
              />
            </div>
            <button 
              onClick={() => navigate('/jobs')}
              className="bg-[#C3A4D9] hover:bg-[#B190C9] text-white px-6 py-2 rounded-r-lg flex items-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={() => navigate('/jobs')}
            className="bg-white text-[#C3A4D9] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            For Job Seekers
          </button>
          <button 
            onClick={() => navigate('/post-job')}
            className="bg-[#C3A4D9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B190C9] transition"
          >
            For Employers
          </button>
        </div>
      </div>
    </div>
  );
}