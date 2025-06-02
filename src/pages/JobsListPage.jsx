import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';
import JobTackingCard from '../pages/JobTackingCard';

const sampleJobs = [
  {
    job_id: '1',
    title: 'Senior Frontend Developer',
    skill_set: ['React', 'JavaScript', 'CSS', 'HTML', 'TypeScript'],
    location: 'Remote',
    job_type: 'Full-time',
    vacancies: 2,
  },
  {
    job_id: '2',
    title: 'Backend Engineer (Python)',
    skill_set: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    location: 'New York, NY',
    job_type: 'Full-time',
    vacancies: 1,
  },
  {
    job_id: '3',
    title: 'UX/UI Designer',
    skill_set: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    location: 'San Francisco, CA',
    job_type: 'Contract',
    vacancies: 1,
  },
  {
    job_id: '4',
    title: 'DevOps Engineer',
    skill_set: ['Kubernetes', 'Terraform', 'Jenkins', 'Azure'],
    location: 'Austin, TX',
    job_type: 'Full-time',
    vacancies: 3,
  },
];

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // api.get('/jobs/')
    //   .then(res => setJobs(res.data))
    //   .catch(() => setError('Failed to load jobs'))
    //   .finally(() => setLoading(false));
    setTimeout(() => {
      setJobs(sampleJobs);
      setLoading(false);
    }, 500); // Simulate loading for 500ms
  }, []);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Jobs</h2>
        <Link to="/jobs/create" className="btn btn-primary">Create New Job</Link>
      </div>
      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Skills</th>
            <th>Location</th>
            <th>Type</th>
            <th>Vacancies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.job_id}>
              <td>{job.title}</td>
              <td>{job.skill_set && job.skill_set.join(', ')}</td>
              <td>{job.location}</td>
              <td>{job.job_type}</td>
              <td>{job.vacancies}</td>
              <td>
                <Link to={`/jobs/${job.job_id}`} className="btn btn-sm btn-info me-2">View Details</Link>
                <Link to={`/jobs/${job.job_id}/resumes`} className="btn btn-sm btn-secondary">Resumes</Link>
                <Link to={`/public/jobs/${job.job_id}`} className="btn btn-sm btn-outline-primary ms-2">Public View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* job list section section */}

      {jobs.map((job) => (
          <div key={job.job_id}  >
            <JobTackingCard title={job.title} status={job.job_type} stats={job.location} />
          </div>
        ))}

    </div>
  );
};

export default JobsListPage;
