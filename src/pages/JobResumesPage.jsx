import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams, Link } from 'react-router-dom';

const JobResumesPage = () => {
  const { jobId } = useParams();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/resumes/', { params: { job_id: jobId } })
      .then(res => setResumes(res.data))
      .catch(() => setError('Failed to load resumes'))
      .finally(() => setLoading(false));
  }, [jobId]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Resumes for Job</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map(resume => (
            <tr key={resume.id}>
              <td>{resume.candidate_name}</td>
              <td>{resume.email}</td>
              <td>{resume.uploaded_at ? new Date(resume.uploaded_at).toLocaleString() : ''}</td>
              <td>
                <Link to={`/resumes/${resume.id}`} className="btn btn-sm btn-info">Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobResumesPage;
