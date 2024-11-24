import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Bell, MessageCircle, Settings, User, Search, BriefcaseIcon } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#C3A4D9]' : 'text-gray-700 hover:text-[#C3A4D9]';
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-[#C3A4D9]" />
            <span className="ml-2 text-xl font-semibold text-gray-900">InclusionHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/jobs" className={`${isActive('/jobs')} flex items-center`}>
              <Search className="h-5 w-5 mr-1" />
              <span>Jobs</span>
            </Link>
            <Link to="/post-job" className={`${isActive('/post-job')} flex items-center`}>
              <BriefcaseIcon className="h-5 w-5 mr-1" />
              <span>Post a Job</span>
            </Link>
            <Link to="/messages" className={`${isActive('/messages')} flex items-center`}>
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>Messages</span>
            </Link>
            <Link to="/notifications" className={`${isActive('/notifications')} flex items-center`}>
              <Bell className="h-5 w-5 mr-1" />
              <span>Notifications</span>
            </Link>
            <Link to="/settings" className={`${isActive('/settings')} flex items-center`}>
              <Settings className="h-5 w-5 mr-1" />
              <span>Settings</span>
            </Link>
            <Link to="/profile" className={`${isActive('/profile')} flex items-center`}>
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}