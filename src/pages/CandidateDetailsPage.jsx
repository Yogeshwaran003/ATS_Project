import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar, Star, MessageSquare, Download } from 'lucide-react';
import api from '../api/api';
import '../styles/Timeline.css';
import '../styles/Breadcrumb.css';

const CandidateDetailsPage = () => {
  const { resumeId } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentStep] = useState('Interview'); // This would normally be from your state management

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/resumes/${resumeId}`);
        console.log('API Response:', response.data); // Debug log
        setCandidate(response.data);
      } catch (err) {
        setError('Failed to load candidate details');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateDetails();
  }, [resumeId]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? "#ffc107" : "none"}
        color={index < rating ? "#ffc107" : "#6c757d"}
      />
    ));
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return { bg: '#e6f3e6', text: '#28a745' };
      case 'pending approval':
        return { bg: '#fff3cd', text: '#ffc107' };
      case 'expired':
        return { bg: '#f8d7da', text: '#dc3545' };
      default:
        return { bg: '#e9ecef', text: '#6c757d' };
    }
  };

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger m-4">{error}</div>;
  if (!candidate) return null;

  const steps = ['Applied', 'Under Review', 'Interview', 'Offer', 'Hire'];
  const currentStepIndex = steps.findIndex(step => step === currentStep);

  const getStepClass = (index) => {
    const baseClass = 'progress-step';
    const stepClasses = ['applied', 'under-review', 'interview', 'offer', 'hire'];
    return `${baseClass} ${index <= currentStepIndex ? stepClasses[index] : ''}`;
  };

  return (
    <div className="container-fluid p-4">
      {/* Top Breadcrumb Navigation */}
      <nav className="breadcrumb-nav mb-4">
        <Link to="/candidates" className="breadcrumb-item">Candidates</Link>
        <span className="mx-2">›</span>
        <span className="breadcrumb-item">Candidate Details</span>
      </nav>

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Senior Developer</h2>
          <div className="d-flex gap-2 mt-2">
            <span className="badge rounded-pill" style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}>
              AI
            </span>
            <span 
              className="badge rounded-pill" 
              style={{ 
                backgroundColor: getStatusColor(candidate.status).bg, 
                color: getStatusColor(candidate.status).text 
              }}
            >
              {candidate.status || 'Open'}
            </span>
          </div>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <Download size={18} />
          </button>
          <button className="btn btn-outline-secondary">
            <Phone size={18} />
          </button>
          <button className="btn btn-outline-secondary">
            <Mail size={18} />
          </button>
          <button className="btn btn-primary">
            Move to Offer →
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container mb-4">
        <div className="progress-steps">
          {steps.map((step, index) => (
            <div
              key={step}
              className={getStepClass(index)}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        {/* Left Column */}
        <div className="col-lg-8">
          {/* Basic Info Card */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div className="position-relative">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center bg-light"
                    style={{ width: '80px', height: '80px', fontSize: '2rem' }}
                  >
                    {candidate.candidate_name?.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="ms-3 flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4 className="mb-1">{candidate.candidate_name}</h4>
                      <p className="text-muted mb-2">{candidate.role || 'Software Engineer'}</p>
                      <div className="d-flex gap-3 text-muted small">
                        <span>
                          <Mail size={14} className="me-1" /> 
                          {candidate.email}
                        </span>
                        <span>
                          <Phone size={14} className="me-1" /> 
                          {candidate.contact_number || candidate.phone_number || candidate.phone || '(999) 999-9999'}
                        </span>
                        <span>
                          <MapPin size={14} className="me-1" /> 
                          {candidate.location || 'New York, USA'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div 
                        className="px-3 py-2 rounded-pill"
                        style={{
                          backgroundColor: getStatusColor(candidate.status).bg,
                          color: getStatusColor(candidate.status).text,
                          fontSize: '0.875rem',
                          fontWeight: 500
                        }}
                      >
                        {candidate.status || 'Open'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <h5 className="mb-0">Working experience</h5>
                </div>
                <span className="text-muted">4 yr 7 mos</span>
              </div>
              <div className="timeline position-relative">
                {[
                  {
                    title: 'Senior Software Engineer',
                    company: 'GlobalTech Solutions',
                    type: 'Remote',
                    period: 'Jan 2021 - Present',
                    status: 'Working'
                  },
                  {
                    title: 'Software Engineer',
                    company: 'GlobalTech Solutions',
                    type: 'On-site',
                    period: 'Jan 2019 - Jan 2021'
                  },
                  {
                    title: 'Junior Software Engineer',
                    company: 'GlobalTech Solutions',
                    type: 'On-site',
                    period: 'Jan 2018 - Jan 2019'
                  }
                ].map((exp, index, array) => (
                  <div key={index} className="timeline-item position-relative mb-4 ps-4">
                    {/* Timeline dot */}
                    <div 
                      className="timeline-dot position-absolute"
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '50%',
                        left: '-6px',
                        top: '6px',
                        zIndex: 2
                      }}
                    />
                    {index < array.length - 1 && (
                      <div 
                        className="timeline-line position-absolute"
                        style={{
                          width: '2px',
                          backgroundColor: '#e9ecef',
                          left: '0',
                          top: '12px',
                          bottom: '-24px',
                          zIndex: 1
                        }}
                      />
                    )}
                    
                    {/* Content */}
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <h6 className="mb-0">{exp.title}</h6>
                        {exp.status && (
                          <span className="badge rounded-pill badge-working" 
                                style={{ 
                                  backgroundColor: '#ffebf0', 
                                  color: '#ff4d7d',
                                  fontSize: '0.75rem',
                                  padding: '0.25rem 0.75rem'
                                }}>
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted small">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <div className="text-muted small">{exp.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">Cover letter</h5>
              <p className="text-muted">
                Dear Hiring Manager,<br /><br />
                I am writing to express my interest in the Software Engineer position at TechSolutions Inc., as advertised on LinkedIn. With a background in software development, a passion for problem-solving...
              </p>
              <button className="btn btn-link text-primary p-0">Read more</button>
            </div>
          </div>

          {/* Resume */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">Resume</h5>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Download size={24} className="text-primary" />
                  </div>
                  <div>
                    <div>Resume.pdf</div>
                    <div className="text-muted small">245 kb</div>
                  </div>
                </div>
                <a href={`http://localhost:8000/resumes/download/${resumeId}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Comments</h5>
                <button className="btn btn-link text-primary">+ Add comment</button>
              </div>
              {[
                {
                  author: 'Klara Weaver',
                  time: '10:15 AM',
                  comment: 'Technical Skills Assessment: "The candidate showed strong skills in algorithms and data structures but struggled with some system design concepts. Further assessment could clarify their knowledge."'
                },
                {
                  author: 'Jennifer Martinez',
                  time: '10:05 AM',
                  comment: 'Overall Impression: "The candidate has a solid foundation in software engineering and a willingness to learn. They may need training on our tech stack, but I recommend a second interview to assess their potential."'
                }
              ].map((comment, index) => (
                <div key={index} className="mb-3 pb-3 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <strong>{comment.author}</strong>
                    <span className="text-muted small">{comment.time}</span>
                  </div>
                  <p className="text-muted mb-0">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Evaluations */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">Evaluations</h5>
                <button className="btn btn-link text-primary">Update</button>
              </div>

              {/* Technical Skills */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Technical Skills</h6>
                  <div className="d-flex">{renderStars(4)}</div>
                </div>
                <p className="text-muted small mb-0">AI skills need training</p>
              </div>

              {/* Problem-Solving Ability */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Problem-Solving Ability</h6>
                  <div className="d-flex">{renderStars(5)}</div>
                </div>
                <p className="text-muted small mb-0">Exceptional analytical abilities, quickly identified solutions</p>
              </div>

              {/* Communication Skills */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Communication Skills</h6>
                  <div className="d-flex">{renderStars(4)}</div>
                </div>
                <p className="text-muted small mb-0">Good communication, though could improve presentation of technical ideas</p>
              </div>

              {/* Cultural Fit */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Cultural Fit</h6>
                  <div className="d-flex">{renderStars(5)}</div>
                </div>
                <p className="text-muted small mb-0">Great attitude and team-oriented</p>
              </div>

              {/* Adaptability */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Adaptability</h6>
                  <div className="d-flex">{renderStars(4)}</div>
                </div>
                <p className="text-muted small mb-0">Shows willingness to learn and adapt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsPage; 