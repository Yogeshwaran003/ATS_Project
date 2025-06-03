import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import JobTackingCard from "../pages/JobTackingCard";

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    openPositions: 0,
    activeJobs: 0,
    pendingApproval: 0,
    expiredPosts: 0
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await api.get('/jobs/');
        setJobs(response.data);
        
        // Calculate stats from the fetched data
        const statsData = response.data.reduce((acc, job) => {
          if (job.status === 'open') acc.openPositions++;
          if (job.status === 'active') acc.activeJobs++;
          if (job.status === 'pending') acc.pendingApproval++;
          if (job.status === 'expired') acc.expiredPosts++;
          return acc;
        }, {
          openPositions: 0,
          activeJobs: 0,
          pendingApproval: 0,
          expiredPosts: 0
        });
        
        setStats(statsData);
      } catch (err) {
        setError('Failed to load jobs. Please try again later.');
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading)
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Jobs</h2>
        <div className="d-flex gap-2">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="filterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Open
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Closed
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Draft
                </a>
              </li>
            </ul>
          </div>
          <Link to="/jobs/create" className="btn btn-primary">
            Create New Job
          </Link>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="d-flex justify-content-around p-4">
          <div className="border-end border-2 border-dark pe-5">
            <h5>Open Position</h5>
            <h3>{stats.openPositions}</h3>
          </div>

          <div className="border-end border-2 border-dark pe-5">
            <h5>Active job post</h5>
            <h3>{stats.activeJobs}</h3>
          </div>

          <div className="border-end border-2 border-dark pe-5">
            <h5>Pending Approval</h5>
            <h3>{stats.pendingApproval}</h3>
          </div>

          <div>
            <h5>Expired Posts</h5>
            <h3>{stats.expiredPosts}</h3>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <h6 className="text-primary cursor-pointer">All</h6>
          <h6>Open</h6>
          <h6>Pending Approval</h6>
          <h6>Expired</h6>
        </div>

        <div className="d-flex gap-2">
          <div className="p-2" style={{backgroundColor:"#eae9ea"}} >i</div>
          <div className="p-2" style={{backgroundColor:"#eae9ea"}} >i</div>
        </div>
      </div>

      {/* job list section */}
      {jobs.map((job) => (
        <div key={job.job_id}>
          <JobTackingCard
            title={job.title}
            jobType={job.job_type}
            status={job.status}
            stats={job.location}
            jobId={job.job_id}
          />
        </div>
      ))}
    </div>
  );
};

export default JobsListPage;
