import React from 'react';
import { Users, Building2, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Inclusive Job Search',
    description: 'Find opportunities with employers committed to diversity and inclusion.'
  },
  {
    icon: Building2,
    title: 'Company Profiles',
    description: 'Learn about company culture, values, and diversity initiatives.'
  },
  {
    icon: BarChart,
    title: 'Career Growth',
    description: 'Access resources and tools to advance your professional journey.'
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'A protected space where everyone feels welcome and respected.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose InclusionHub?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to creating an inclusive job marketplace where talent meets opportunity.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="bg-[#C3A4D9] rounded-full p-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}