import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams, Link } from 'react-router-dom';

const PublicJobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.get(`/jobs/${jobId}`)
      .then(res => {
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
    <div className="container py-5">
      <div className="row align-items-center mb-4">
        <div className="col-md-8">
          <h1 className="display-5 fw-bold mb-2 text-primary text-center">{job.title}</h1>
          <div className="mb-2 text-center">
            <span className="badge bg-primary me-2">{job.location}</span>
            <span className="badge bg-secondary me-2">{job.job_type}</span>
            <span className="badge bg-info text-dark">Vacancies: {job.vacancies}</span>
          </div>
          <p className="lead text-dark mb-3 fs-5 text-center">{job.short_description}</p>
        </div>
        <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
          <Link to={`/jobs/${jobId}/apply`} className="btn btn-lg btn-success shadow-sm px-4 py-2">Apply Now</Link>
        </div>
      </div>
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <div className="card shadow-sm h-100">
            <div className="card-body text-start">
              <h4 className="mb-3 text-secondary">Job Description</h4>
              <p className="mb-3" style={{whiteSpace: 'pre-line'}}>{job.description}</p>
              <h5 className="mt-4 mb-2 text-secondary">Required Skills</h5>
              <div className="mb-3">
                {job.skill_set && job.skill_set.map((skill, idx) => (
                  <span key={idx} className="badge bg-primary me-2 mb-2">{skill}</span>
                ))}
              </div>
              <div className="row mb-2">
                <div className="col-6 col-md-4">
                  <strong>Experience:</strong>
                  <div>{job.experience}</div>
                </div>
                <div className="col-6 col-md-4">
                  <strong>Work Hours:</strong>
                  <div>{job.work_hours}</div>
                </div>
                <div className="col-6 col-md-4">
                  <strong>CTC Range:</strong>
                  <div>{job.ctc_range}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="mb-3 text-secondary">Job Overview</h5>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item px-0"><strong>Location:</strong> {job.location}</li>
                <li className="list-group-item px-0"><strong>Type:</strong> {job.job_type}</li>
                <li className="list-group-item px-0"><strong>Vacancies:</strong> {job.vacancies}</li>
                <li className="list-group-item px-0"><strong>Experience:</strong> {job.experience}</li>
                <li className="list-group-item px-0"><strong>CTC Range:</strong> {job.ctc_range}</li>
                <li className="list-group-item px-0"><strong>Work Hours:</strong> {job.work_hours}</li>
              </ul>
              <h6 className="text-secondary">Contact</h6>
              <div className="mb-1"><strong>Email:</strong> {job.email}</div>
              <div><strong>Mobile:</strong> {job.mobile}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to={`/jobs/${jobId}/apply`} className="btn btn-lg btn-success shadow px-5 py-2">Apply Now</Link>
      </div>
    </div>
  );
};

export default PublicJobDetailsPage;
