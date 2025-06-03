import api from '../api/api';
import React, { useEffect, useState } from 'react';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get('/jobs/');
        setJobs(response.data);
      } catch (err) {
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="career-bg min-vh-100 py-4 px-2 px-md-0">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="career-title text-center fw-bold text-primary mb-4 mb-md-5 display-6 display-md-4">Join Our Team</h2>
        <div className="row g-4 justify-content-center justify-content-md-center">
          {jobs.length === 0 && (
            <div className="col-12 text-center text-muted">No open positions at the moment.</div>
          )}
          {jobs.map(job => (
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5" key={job.job_id}>
              <div
                className="card h-100 shadow-lg border-0 position-relative career-card-hover px-2 py-1"
                style={{ cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s', minHeight: 220 }}
                onClick={() => window.location.href = `/public/jobs/${job.job_id}`}
              >
                <div className="card-body d-flex flex-column justify-content-between p-3 p-md-4">
                  <div>
                    <div className="d-flex align-items-center mb-2 flex-wrap gap-2">
                      <h5 className="career-card-title mb-0 flex-grow-1 text-truncate fs-5 fs-md-4">{job.title}</h5>
                      <span className="badge career-badge career-badge-type ms-2 fs-6">{job.job_type}</span>
                    </div>
                    <div className="mb-2 d-flex flex-wrap gap-2 align-items-center">
                      <span className="badge career-badge career-badge-main"><i className="bi bi-geo-alt-fill me-1"></i>{job.location}</span>
                      <span className="badge career-badge career-badge-vac">Vacancies: {job.vacancies}</span>
                    </div>
                    <p className="career-card-shortdesc mb-3 fs-6 text-secondary">{job.short_description}</p>
                    <div className="mb-2">
                      {job.skill_set && job.skill_set.slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="badge bg-light text-dark border me-1 mb-1 fs-7">{skill}</span>
                      ))}
                      {job.skill_set && job.skill_set.length > 4 && (
                        <span className="badge bg-secondary text-light fs-7">+{job.skill_set.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end career-card-footer mt-3">
                    <span className="text-muted small"><i className="bi bi-clock me-1"></i>{job.work_hours || 'Full Time'}</span>
                    <a href={`/jobs/${job.job_id}/apply`} className="btn btn-success btn-sm px-4 py-2 fw-semibold shadow-sm" onClick={e => e.stopPropagation()}>Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .career-card-hover:hover {
            transform: scale(1.025);
            box-shadow: 0 8px 32px rgba(108,99,255,0.10), 0 1.5px 6px rgba(0,0,0,0.04);
            z-index: 2;
          }
          .career-card-title {
            font-size: 1.1rem;
          }
          @media (min-width: 768px) {
            .career-card-title {
              font-size: 1.35rem;
            }
          }
          .career-badge {
            font-size: 0.95rem;
            padding: 0.4em 0.8em;
          }
          .career-badge-type {
            background: #e9f3ff;
            color: #2563eb;
          }
          .career-badge-main {
            background: #f3f6fa;
            color: #374151;
          }
          .career-badge-vac {
            background: #e7fbe7;
            color: #15803d;
          }
          .career-card-shortdesc {
            font-size: 1rem;
          }
          @media (max-width: 576px) {
            .career-card-shortdesc {
              font-size: 0.97rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Career;
