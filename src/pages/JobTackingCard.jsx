import React from 'react';
import { Edit, Eye, Users } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const JobTrackingCard = ({
  title,
  jobType,
  status,
  stats,
  imageUrl = 'https://picsum.photos/200',
  jobId
}) => {
  const navigate = useNavigate();
  
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return 'bg-success text-white';
      case 'pending approval':
        return 'bg-warning text-dark';
      case 'expired':
        return 'bg-danger text-white';
      default:
        return 'bg-secondary text-white';
    }
  };

  const getJobTypeColor = () => {
    return 'bg-light text-dark';
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-light rounded overflow-hidden" style={{ width: '80px', height: '60px' }}>
              <img 
                src={imageUrl} 
                alt="Job" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div>
              <h5 className="mb-1">{title}</h5>
              <div className="d-flex gap-2">
                <span className={`badge rounded-pill ${getJobTypeColor()}`}>
                  {jobType || 'Full-time'}
                </span>
                <span className={`badge rounded-pill ${getStatusColor(status)}`}>
                  {status || 'Open'}
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2">
            <Link to={`/jobs/${jobId}/edit`} className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1">
              <Edit size={16} />
              Edit
            </Link>
            <Link to={`/public/jobs/${jobId}`} className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1">
              <Eye size={16} />
              View job post
            </Link>
            <Link to={`/jobs/${jobId}/resumes`} className="btn btn-primary btn-sm d-flex align-items-center gap-1">
              <Users size={16} />
              View Candidates
            </Link>
          </div>
        </div>
        
        <div className="row gap-3 text-center">
          <div className="col rounded-3 p-2" style={{backgroundColor:"#eae9ea"}}>
            {/* <h4>{stats.applied}</h4> */}
            <h4>{100}</h4>
            <p className="text-muted mb-0">Applied</p>
          </div>
          <div className="col rounded-3 p-2" style={{backgroundColor:"#eae9ea"}}>
            {/* <h4>{stats.underReview}</h4> */}
            <h4>{50}</h4>
            <p className="text-muted mb-0">Under Review</p>
          </div>
          <div className="col rounded-3 p-2" style={{backgroundColor:"#eae9ea"}}>
            {/* <h4>{stats.interviewed}</h4> */}
            <h4>{25}</h4>
            <p className="text-muted mb-0">Interviewed</p>
          </div>
          <div className="col rounded-3 p-2" style={{backgroundColor:"#eae9ea"}}>
            {/* <h4>{stats.offered}</h4> */}
            <h4>{12}</h4>
            <p className="text-muted mb-0">Offered</p>
          </div>
          <div className="col rounded-3 p-2" style={{backgroundColor:"#eae9ea"}}>
            {/* <h4>{stats.hired}</h4> */}
            <h4>{6}</h4>
            <p className="text-muted mb-0">Hired</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTrackingCard;
