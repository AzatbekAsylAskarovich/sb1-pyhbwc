import React from 'react';
import JobSearch from '../components/JobSearch';
import JobList from '../components/JobList';

export default function JobPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Dream Job</h1>
        <JobSearch />
        <div className="mt-8">
          <JobList />
        </div>
      </div>
    </div>
  );
}