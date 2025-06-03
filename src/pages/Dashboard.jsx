import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

const pipelineData = [
  { label: 'Applied', value: 70 },
  { label: 'Under Review', value: 35 },
  { label: 'Interviewed', value: 10 },
  { label: 'Offered', value: 10 },
  { label: 'Hired', value: 10 }
];

const jobSummary = [
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=60&q=80',
    title: 'Software Engineer',
    status: 'Open',
    applicants: 81,
    exp: 'Nov 15, 2024',
    action: 'View'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=60&q=80',
    title: 'Marketing Manager',
    status: 'Open',
    applicants: 12,
    exp: 'Nov 30, 2024',
    action: 'View'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=60&q=80',
    title: 'HR Coordinator',
    status: 'Pending Approval',
    applicants: '-',
    exp: '-',
    action: 'View'
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=60&q=80',
    title: 'Sales Executive',
    status: 'Expired',
    applicants: 12,
    exp: 'Oct 05, 2024',
    action: 'View'
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=60&q=80',
    title: 'Product Designer',
    status: 'Open',
    applicants: 12,
    exp: 'Nov 22, 2024',
    action: 'View'
  }
];

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use demo data directly instead of API call
    setTimeout(() => {
      setSummary(demoSummary);
      setLoading(false);
    }, 500); // Simulate loading for 500ms
  }, []);

  // Placeholder summary for demo
  const demoSummary = {
    jobs: 5,
    applications: 42,
    shortlisted: 10,
    interviewed: 7,
    offers: 3
  };

  const data = summary || demoSummary;

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="dashboard-bg min-vh-100">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-3">Hello Sarah!!</h2>
          </div>
        </div>
        <div className="row g-3 mb-4 align-items-lg-center"> {/* Align items center on lg screens and up */} 
          <div className="col-lg-auto col-md-6 mb-2 mb-lg-0"> {/* Takes auto width on lg, 50% on md, stacks below lg */} 
            <Link to="/jobs/create" className="btn btn-outline-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-file-earmark-plus fs-4"></i> Create a Job Post
            </Link>
          </div>
          <div className="col-lg-auto col-md-6 mb-2 mb-lg-0"> {/* Takes auto width on lg, 50% on md, stacks below lg */} 
            <button className="btn btn-outline-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-person-plus fs-4"></i> Add an Employee here
            </button>
          </div>
          <div className="col-lg col-md-12"> {/* Takes remaining space on lg, full width on md and stacks */} 
            <div className="input-group">
              <input type="text" className="form-control form-control-lg" placeholder="Search Candidates" />
              <span className="input-group-text bg-white text-success fw-bold">New</span>
              <button className="btn btn-primary px-4" type="button"><i className="bi bi-search"></i></button>
            </div>
          </div>
        </div>
        
        {/* Candidate Pipeline */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card p-3 p-md-4 shadow-sm border-0"> {/* Adjusted padding for responsiveness */}
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3"> {/* Flex column on xs, row on sm+ */} 
                <div className="fw-semibold mb-2 mb-sm-0"><i className="bi bi-diagram-3 me-2"></i>Candidate Pipeline</div>
                <Link to="#" className="text-primary small">Detail <i className="bi bi-chevron-right"></i></Link>
              </div>
              <div className="row align-items-end candidate-pipeline-row" style={{ minHeight: '180px' }}> {/* Added minHeight and a class for potential CSS targeting */}
                {pipelineData.map((item, idx) => (
                  <div className="col-6 col-sm-4 col-md text-center mb-3 mb-md-0" key={item.label}> {/* Responsive column classes */}
                    <div 
                      className="dashboard-bar mx-auto mb-2" 
                      style={{ height: `${Math.min(item.value * 1.8, 120)}px`, background: '#7b8cff' }} /* Adjusted multiplier and max height */ 
                    >
                      <span className="dashboard-bar-label">{item.value}</span> {/* Simplified label */}
                    </div>
                    <div className="fw-semibold text-muted small pipeline-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Job Post Summary */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card p-4 shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-semibold"><i className="bi bi-journal-text me-2"></i>Job Post Summary</div>
                <Link to="#" className="text-primary small">Detail <i className="bi bi-chevron-right"></i></Link>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-3 col-6">
                  <div className="dashboard-summary-tile bg-pink text-white">
                    <div className="fs-4 fw-bold">5</div>
                    <div className="small">Open Positions</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="dashboard-summary-tile bg-light">
                    <div className="fs-4 fw-bold text-primary">3</div>
                    <div className="small text-muted">Active Job Posts</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="dashboard-summary-tile bg-light">
                    <div className="fs-4 fw-bold text-warning">1</div>
                    <div className="small text-muted">Pending Approval</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="dashboard-summary-tile bg-light">
                    <div className="fs-4 fw-bold text-secondary">1</div>
                    <div className="small text-muted">Expired Posts</div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Job Title</th>
                      <th>Status</th>
                      <th>Applicants</th>
                      <th>Expiration Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobSummary.map((job, idx) => (
                      <tr key={idx}>
                        <td><img src={job.image} alt={job.title} className="rounded-3" style={{width: 44, height: 44, objectFit: 'cover'}} /></td>
                        <td>{job.title}</td>
                        <td>
                          {job.status === 'Open' && <span className="badge bg-primary">Open</span>}
                          {job.status === 'Pending Approval' && <span className="badge bg-warning text-dark">Pending Approval</span>}
                          {job.status === 'Expired' && <span className="badge bg-secondary">Expired</span>}
                        </td>
                        <td>{job.applicants}</td>
                        <td>{job.exp}</td>
                        <td><Link to="#" className="text-primary">View</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
