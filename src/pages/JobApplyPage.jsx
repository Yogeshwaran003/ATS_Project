import React from 'react';
import { useParams } from 'react-router-dom';
import ResumeApply from '../components/ResumeApply';

const JobApplyPage = () => {
  const { jobId } = useParams();
  return (
    <div className="container mt-4">
      <h2>Apply for Job</h2>
      <ResumeApply jobId={jobId} />
    </div>
  );
};

export default JobApplyPage;
