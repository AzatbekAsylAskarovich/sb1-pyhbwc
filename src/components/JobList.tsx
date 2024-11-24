import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced software engineer to join our diverse team...',
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Design Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our creative team to design inclusive and accessible user experiences...',
    posted: '3 days ago'
  },
  // Add more job listings as needed
];

export default function JobList() {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <div className="flex items-center mt-2 text-gray-600">
                <Building2 className="h-4 w-4 mr-2" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{job.location}</span>
                <Clock className="h-4 w-4 ml-4 mr-2" />
                <span>{job.type}</span>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
            </div>
            <button className="bg-[#C3A4D9] hover:bg-[#B190C9] text-white px-6 py-2 rounded-lg font-semibold transition">
              Apply Now
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">Posted {job.posted}</div>
        </div>
      ))}
    </div>
  );
}