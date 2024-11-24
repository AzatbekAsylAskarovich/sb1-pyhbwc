import React from 'react';
import { Bell, Lock, Key, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-[#C3A4D9]" />
              Notification Settings
            </h2>
            <div className="mt-4 space-y-4">
              {['Job recommendations', 'Application updates', 'Messages', 'Profile views'].map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#C3A4D9] focus:ring-[#C3A4D9]"
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Lock className="h-5 w-5 mr-2 text-[#C3A4D9]" />
              Privacy Settings
            </h2>
            <div className="mt-4 space-y-4">
              {['Show profile to employers', 'Allow messages from recruiters', 'Share job history'].map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#C3A4D9] focus:ring-[#C3A4D9]"
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Key className="h-5 w-5 mr-2 text-[#C3A4D9]" />
              Change Password
            </h2>
            <div className="mt-4 space-y-4">
              <input
                type="password"
                placeholder="Current password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C3A4D9] focus:border-transparent"
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C3A4D9] focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C3A4D9] focus:border-transparent"
              />
              <button className="bg-[#C3A4D9] hover:bg-[#B190C9] text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold text-red-600 flex items-center">
              <Trash2 className="h-5 w-5 mr-2" />
              Delete Account
            </h2>
            <p className="mt-2 text-gray-600">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}