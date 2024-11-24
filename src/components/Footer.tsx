import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#C3A4D9]" />
              <span className="ml-2 text-lg font-semibold">InclusionHub</span>
            </div>
            <p className="text-gray-400">
              Creating inclusive workplaces, one connection at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C3A4D9]">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#C3A4D9] mr-2" />
                <a href="mailto:support@inclusionhub.com" className="text-gray-400 hover:text-[#C3A4D9]">
                  support@inclusionhub.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#C3A4D9] mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#C3A4D9]">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InclusionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}