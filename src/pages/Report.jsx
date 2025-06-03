import React from 'react';
import { BsPeople, BsBarChart, BsPieChart, BsGraphUp, BsPersonCheck, BsPersonLinesFill, BsDiagram3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const iconStyle = { fontSize: '2.5rem', marginBottom: '1rem', color: '#6c63ff' };

const cardStyle = {
  cursor: 'pointer',
  transition: 'transform 0.15s, box-shadow 0.15s',
};

const Report = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-3 px-md-4 py-4" style={{ background: '#f8f9fb', minHeight: '100vh' }}>
      {/* Candidate Reports */}
      <div className="card shadow-sm mb-4 p-3 p-md-4 border-0" style={{ borderRadius: '16px' }}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <BsPeople style={{ fontSize: '1.7rem', color: '#6c63ff' }} />
          <h4 className="mb-0 fw-bold">Candidate Reports</h4>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/pipeline')}>
              <BsBarChart style={iconStyle} />
              <h5 className="fw-semibold">Pipeline Progress Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Tracks candidates' progress through the recruitment process, showing how many are at each stage
              </p>
            </div>
          </div>
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/quality')}>
              <BsDiagram3 style={iconStyle} />
              <h5 className="fw-semibold">Quality Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Evaluates candidate quality in the recruitment funnel using interview feedback, assessment scores
              </p>
            </div>
          </div>
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/diversity')}>
              <BsPieChart style={iconStyle} />
              <h5 className="fw-semibold">Diversity Candidate Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Monitors applicant diversity at each recruitment stage, showing how the hiring process supports inclusion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Reports */}
      <div className="card shadow-sm mb-4 p-3 p-md-4 border-0" style={{ borderRadius: '16px' }}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <BsPersonCheck style={{ fontSize: '1.7rem', color: '#6c63ff' }} />
          <h4 className="mb-0 fw-bold">Employee Reports</h4>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/performance')}>
              <BsPieChart style={iconStyle} />
              <h5 className="fw-semibold">Performance Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Tracks individual and team performance over time, evaluating KPIs, goals, and contributions
              </p>
            </div>
          </div>
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/attendance')}>
              <BsGraphUp style={iconStyle} />
              <h5 className="fw-semibold">Attendance Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Provides insights into attendance patterns, including absences, late arrivals, and leave, to ensure workforce reliability
              </p>
            </div>
          </div>
          <div className="col">
            <div className="h-100 p-4 bg-white rounded-4 shadow-sm report-card" style={cardStyle} onClick={() => navigate('/reports/engagement')}>
              <BsPersonLinesFill style={iconStyle} />
              <h5 className="fw-semibold">Engagement Report</h5>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.97rem' }}>
                Measures employee engagement through surveys, feedback, and participation, gauging morale and company culture
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .report-card:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px rgba(108,99,255,0.12), 0 1.5px 6px rgba(0,0,0,0.04);
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Report;