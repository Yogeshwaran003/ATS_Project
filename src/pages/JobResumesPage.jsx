import React, { useState, useEffect, useMemo } from 'react';
import api from '../api/api';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaEye, FaSearch, FaBriefcase } from 'react-icons/fa';

const JobResumesPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('uploaded_at');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    api.get('/resumes/', { params: { job_id: jobId } })
      .then(res => setResumes(res.data))
      .catch(() => setError('Failed to load resumes'))
      .finally(() => setLoading(false));
  }, [jobId]);

  const filteredAndSortedResumes = useMemo(() => {
    let filtered = resumes.filter(resume =>
      resume.candidate_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resume.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [resumes, searchTerm, sortBy, sortOrder]);

  const handleCardClick = (resumeId) => {
    navigate(`/resumes/${resumeId}/details`);
  };

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container-fluid p-4">
      {/* Top Bar with Search and Filters */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm">
            <h2 className="m-0">Resumes for Job</h2>
            <div className="d-flex gap-3 align-items-center">
              {/* Search Bar with Icon */}
              <div className="position-relative">
                <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                <input
                  type="text"
                  className="form-control ps-5"
                  style={{ minWidth: '250px' }}
                  placeholder="Search resumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="d-flex gap-2">
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ minWidth: '150px' }}
                >
                  <option value="uploaded_at">Sort by Date</option>
                  <option value="candidate_name">Sort by Name</option>
                  <option value="email">Sort by Email</option>
                </select>
                <select
                  className="form-select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Cards */}
      <div className="row g-4">
        {filteredAndSortedResumes.length > 0 ? (
          filteredAndSortedResumes.map(resume => (
            <div key={resume.id} className="col-12 mb-3">
              <div 
                className="card border-0 shadow-sm" 
                style={{ background: '#f8f9fa', cursor: 'pointer' }}
                onClick={() => handleCardClick(resume.id)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-4">
                    {/* Avatar Circle */}
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ 
                           width: '60px', 
                           height: '60px', 
                           backgroundColor: '#e9ecef',
                           color: '#6c757d'
                         }}>
                      {resume.candidate_name.charAt(0).toUpperCase()}
                    </div>

                    {/* Content */}
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <h5 className="card-title mb-0">{resume.candidate_name}</h5>
                        <span className="badge bg-light text-secondary px-2 py-1">Applied</span>
                      </div>
                      <div className="d-flex align-items-center text-muted mb-2">
                        <FaBriefcase className="me-2" size={14} />
                        <span>Software Engineer</span>
                      </div>
                      <p className="text-muted mb-0 small">{resume.email}</p>
                      <p className="text-muted mb-0 small">
                        Uploaded: {resume.uploaded_at ? new Date(resume.uploaded_at).toLocaleString() : 'N/A'}
                      </p>
                    </div>

                    {/* Detail Button */}
                    <button 
                      className="btn btn-light d-flex align-items-center gap-2"
                      style={{ color: '#6c757d' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(resume.id);
                      }}
                    >
                      <FaEye size={14} /> Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted mb-0">No resumes found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobResumesPage;
