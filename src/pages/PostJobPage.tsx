import React from 'react';
import JobPostForm from '../components/JobPostForm';

export default function PostJobPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobPostForm />
      </div>
    </div>
  );
}