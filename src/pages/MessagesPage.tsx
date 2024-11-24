import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'Alice Johnson',
    lastMessage: 'Thanks for your application! We would like to...',
    timestamp: '2 hours ago',
    unread: true
  },
  {
    id: 2,
    name: 'TechCorp HR',
    lastMessage: 'Your interview is scheduled for tomorrow at...',
    timestamp: '1 day ago',
    unread: false
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-8rem)] flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C3A4D9] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 text-left hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? 'bg-[#C3A4D9]/10' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900">{conversation.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Message Content */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {conversations.find(c => c.id === selectedConversation)?.name}
                  </h2>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Messages would go here */}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C3A4D9] focus:border-transparent"
                    />
                    <button className="bg-[#C3A4D9] hover:bg-[#B190C9] text-white p-2 rounded-lg">
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}