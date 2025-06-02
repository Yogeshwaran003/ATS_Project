import React, { useState } from 'react';

const InterviewSchedule = () => {
  const [slot, setSlot] = useState('');
  const [interviewers, setInterviewers] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess('Interview slot proposed and invite sent!');
    setSlot('');
    setInterviewers('');
  };

  return (
    <div className="container mt-4">
      <h2>Schedule Interview</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Interview Slot</label>
          <input type="datetime-local" className="form-control" value={slot} onChange={e => setSlot(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Interviewers (comma separated)</label>
          <input className="form-control" value={interviewers} onChange={e => setInterviewers(e.target.value)} required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-info">Send Invite</button>
        </div>
      </form>
    </div>
  );
};

export default InterviewSchedule;
