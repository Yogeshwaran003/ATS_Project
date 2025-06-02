import api from '../api/api';
import React, { useEffect, useState } from 'react';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sampleJobs = [
    {
      job_id: '1',
      title: 'Software Engineer (Frontend)',
      job_type: 'Full-time',
      location: 'San Francisco, CA',
      vacancies: 2,
      short_description: 'We are looking for a skilled Frontend Engineer to join our dynamic team. You will be responsible for building and maintaining our web applications.',
      skill_set: ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Redux'],
      work_hours: '40 hours/week'
    },
    {
      job_id: '2',
      title: 'Product Manager',
      job_type: 'Full-time',
      location: 'New York, NY',
      vacancies: 1,
      short_description: 'Seeking an experienced Product Manager to lead the development and execution of our product strategy. Strong analytical and communication skills required.',
      skill_set: ['Product Strategy', 'Agile', 'Market Research', 'Roadmapping', 'JIRA'],
      work_hours: 'Full Time'
    },
    {
      job_id: '3',
      title: 'UX/UI Designer',
      job_type: 'Contract',
      location: 'Remote',
      vacancies: 1,
      short_description: 'Join our team as a UX/UI Designer to create intuitive and visually appealing user experiences for our digital products. Portfolio required.',
      skill_set: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
      work_hours: 'Flexible'
    }
  ];

  useEffect(() => {
    // Use sample data directly
    setTimeout(() => {
      setJobs(sampleJobs);
      setLoading(false);
    }, 500); // Simulate loading
  }, []);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="career-bg min-vh-100 py-4">
      <div className="container">
        <h2 className="career-title text-center fw-bold text-primary">Join Our Team</h2>
        <div className="row g-3 justify-content-center">
          {jobs.length === 0 && (
            <div className="col-12 text-center text-muted">No open positions at the moment.</div>
          )}
          {jobs.map(job => (
            <div className="col-12 col-md-10 col-lg-8" key={job.job_id}>
              <div
                className="card h-100 shadow-lg border-0 position-relative career-card-hover px-2 py-1"
                style={{ cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s', minHeight: 220 }}
                onClick={() => window.location.href = `/public/jobs/${job.job_id}`}
              >
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <h5 className="career-card-title mb-0 flex-grow-1 text-truncate">{job.title}</h5>
                      <span className="badge career-badge career-badge-type ms-2">{job.job_type}</span>
                    </div>
                    <div className="mb-1">
                      <span className="badge career-badge career-badge-main"><i className="bi bi-geo-alt-fill me-1"></i>{job.location}</span>
                      <span className="badge career-badge career-badge-vac">Vacancies: {job.vacancies}</span>
                    </div>
                    <p className="career-card-shortdesc mb-2">{job.short_description}</p>
                    <div className="mb-1">
                      {job.skill_set && job.skill_set.slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="badge bg-light text-dark border me-1 mb-1">{skill}</span>
                      ))}
                      {job.skill_set && job.skill_set.length > 4 && (
                        <span className="badge bg-secondary text-light">+{job.skill_set.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end career-card-footer">
                    <span className="text-muted"><i className="bi bi-clock me-1"></i>{job.work_hours || 'Full Time'}</span>
                    <a href={`/jobs/${job.job_id}/apply`} className="btn btn-success btn-sm px-4 py-2 fw-semibold shadow-sm" onClick={e => e.stopPropagation()}>Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
