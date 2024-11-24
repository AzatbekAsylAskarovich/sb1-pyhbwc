import React from 'react';
import { Bell, Briefcase, MessageCircle, User } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'application',
    icon: Briefcase,
    title: 'Application Update',
    message: 'Your application for Senior Developer at TechCorp has been reviewed',
    timestamp: '2 hours ago',
    unread: true
  },
  {
    id: 2,
    type: 'message',
    icon: MessageCircle,
    title: 'New Message',
    message: 'You have a new message from Alice Johnson',
    timestamp: '1 day ago',
    unread: false
  },
  {
    id: 3,
    type: 'profile',
    icon: User,
    title: 'Profile View',
    message: 'A recruiter from InnovateTech viewed your profile',
    timestamp: '2 days ago',
    unread: false
  }
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-[#C3A4D9]" />
                Notifications
              </h2>
              <button className="text-sm text-[#C3A4D9] hover:text-[#B190C9]">
                Mark all as read
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 ${
                    notification.unread ? 'bg-[#C3A4D9]/5' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 ${
                      notification.unread ? 'bg-[#C3A4D9]' : 'bg-gray-200'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        notification.unread ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {notification.timestamp}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}