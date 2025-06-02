import React from 'react';
import { Edit, Eye, Users } from 'lucide-react';

const JobTrackingCard = ({
  title,
  status,
  stats,
  imageUrl = '/lovable-uploads/5984f9cc-de29-4248-a0de-3d0f908ba241.png'
}) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Open':
        return 'badge bg-primary';
      case 'Closed':
        return 'badge bg-danger';
      case 'Draft':
        return 'badge bg-secondary';
      default:
        return 'badge bg-secondary';
    }
  };

  return (
    <div className="card shadow-sm mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex align-items-center">
            <div className="me-3" style={{ width: '80px', height: '64px' }}>
              <img
                src={imageUrl}
                alt="Job illustration"
                className="img-fluid rounded"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h5 className="card-title mb-2">{title}</h5>
              <span className={getStatusBadgeClass(status)}>
                {status}
              </span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
              <Edit className="me-1" size={16} />
              Edit
            </button>
            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
              <Eye className="me-1" size={16} />
              View job post
            </button>
            <button className="btn btn-primary btn-sm d-flex align-items-center">
              <Users className="me-1" size={16} />
              View Candidates
            </button>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <div className="h2 fw-bold text-dark mb-1">{stats.applied}</div>
            <div className="small text-muted fw-medium">Applied</div>
          </div>
          <div className="col">
            <div className="h2 fw-bold text-dark mb-1">{stats.underReview}</div>
            <div className="small text-muted fw-medium">Under Review</div>
          </div>
          <div className="col">
            <div className="h2 fw-bold text-dark mb-1">{stats.interviewed}</div>
            <div className="small text-muted fw-medium">Interviewed</div>
          </div>
          <div className="col">
            <div className="h2 fw-bold text-dark mb-1">{stats.offered}</div>
            <div className="small text-muted fw-medium">Offered</div>
          </div>
          <div className="col">
            <div className="h2 fw-bold text-dark mb-1">{stats.hired}</div>
            <div className="small text-muted fw-medium">Hired</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTrackingCard;