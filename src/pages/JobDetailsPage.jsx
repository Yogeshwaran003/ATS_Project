import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams, Link } from 'react-router-dom';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.get(`/jobs/${jobId}`)
      .then(res => {
        // Some APIs may return job.description as null or undefined, so fallback to empty string
        setJob({
          ...res.data,
          description: res.data.description || '',
        });
      })
      .catch(() => setError('Failed to load job details'))
      .finally(() => setLoading(false));
  }, [jobId]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!job) return null;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Job Details</h2>
        <Link to={`/jobs/${jobId}/edit`} className="btn btn-warning">Edit Job</Link>
      </div>
      <div className="card mb-4 p-3">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Title:</strong> {job.title}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Short Description:</strong> {job.short_description}</p>
            <p><strong>Skills:</strong> {job.skill_set && job.skill_set.join(', ')}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.job_type}</p>
          </div>
          <div className="col-md-6">
            <p><strong>Vacancies:</strong> {job.vacancies}</p>
            <p><strong>CTC Range:</strong> {job.ctc_range}</p>
            <p><strong>Work Hours:</strong> {job.work_hours}</p>
            <p><strong>Created By:</strong> {job.created_by}</p>
            <p><strong>Email:</strong> {job.email}</p>
            <p><strong>Mobile:</strong> {job.mobile}</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <Link to={`/jobs/${jobId}/resumes`} className="btn btn-info">View Resumes for this Job</Link>
      </div>
    </div>
  );
};

export default JobDetailsPage;
