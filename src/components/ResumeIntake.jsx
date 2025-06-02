import React, { useEffect, useState } from 'react';
import api from '../api/api';

const ResumeIntake = ({ jobId }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/resumes/', { params: { job_id: jobId } })
      .then(res => setApplicants(res.data))
      .catch(() => setError('Failed to load applicants'))
      .finally(() => setLoading(false));
  }, [jobId]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Applicants</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Resume</th>
            <th>AI Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(app => (
            <tr key={app.id}>
              <td>{app.candidate_name}</td>
              <td>{app.email}</td>
              <td><a href={`http://localhost:8000/api/resumes/download/${app.id}`} target="_blank" rel="noopener noreferrer">Download</a></td>
              <td>{app.ai_score || '-'}</td>
              <td>{app.status || 'Pending'}</td>
              <td>
                <button className="btn btn-sm btn-success me-1">Shortlist</button>
                <button className="btn btn-sm btn-danger me-1">Reject</button>
                <button className="btn btn-sm btn-info">Schedule</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeIntake;
