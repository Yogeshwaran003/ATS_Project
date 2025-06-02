import React from 'react';
import { useParams } from 'react-router-dom';
import ResumeIntake from '../components/ResumeIntake';

const ResumeIntakePage = () => {
  const { jobId } = useParams();
  return (
    <div className="container mt-4">
      <ResumeIntake jobId={jobId} />
    </div>
  );
};

export default ResumeIntakePage;
