import React, { useState } from 'react';

const InterviewFeedback = () => {
  const [form, setForm] = useState({ round: '', feedback: '', status: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess('Feedback submitted and candidate status updated!');
    setForm({ round: '', feedback: '', status: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Interview Feedback</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Round</label>
          <select name="round" className="form-select" value={form.round} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className="col-md-8">
          <label className="form-label">Feedback</label>
          <input name="feedback" value={form.feedback} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Status</label>
          <select name="status" className="form-select" value={form.status} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Rejected">Rejected</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default InterviewFeedback;
