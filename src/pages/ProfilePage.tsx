import React from 'react';
import { User, Mail, Camera, Edit2 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-32 bg-[#C3A4D9]">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
                  <Camera className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Edit2 className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          </div>
          
          <div className="pt-20 px-8 pb-8">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <div className="mt-2 flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>john.doe@example.com</span>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Professional Summary</h2>
                <p className="text-gray-600">
                  Experienced software developer with a passion for creating inclusive and accessible applications.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Accessibility', 'UI/UX'].map((skill) => (
                    <span key={skill} className="bg-[#C3A4D9]/10 text-[#9B7AB5] px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}