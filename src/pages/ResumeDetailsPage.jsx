import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams } from 'react-router-dom';

const ResumeDetailsPage = () => {
  const { resumeId } = useParams();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/resumes/${resumeId}`)
      .then(res => setResume(res.data))
      .catch(() => setError('Failed to load resume details'))
      .finally(() => setLoading(false));
  }, [resumeId]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!resume) return null;

  return (
    <div className="container mt-4">
      <h2>Resume Details</h2>
      <div className="card p-3">
        <p><strong>Name:</strong> {resume.candidate_name}</p>
        <p><strong>Email:</strong> {resume.email}</p>
        <p><strong>Job ID:</strong> {resume.job_id}</p>
        <p><strong>Uploaded:</strong> {resume.uploaded_at ? new Date(resume.uploaded_at).toLocaleString() : ''}</p>
        <a href={`http://localhost:8000/resumes/download/${resume.id}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download PDF</a>
      </div>
    </div>
  );
};

export default ResumeDetailsPage;
