import React, { useState } from 'react';
import api from '../api/api';

const ResumeApply = ({ jobId }) => {
  const [form, setForm] = useState({ candidate_name: '', email: '', file: null });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const data = new FormData();
    data.append('file', form.file);
    try {
      await api.post(`/resumes/upload?candidate_name=${encodeURIComponent(form.candidate_name)}&email=${encodeURIComponent(form.email)}&job_id=${encodeURIComponent(jobId)}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuccess('Resume uploaded successfully!');
      setForm({ candidate_name: '', email: '', file: null });
    } catch {
      setError('Failed to upload resume.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-2">
        <label className="form-label">Name</label>
        <input name="candidate_name" value={form.candidate_name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-2">
        <label className="form-label">Resume (PDF)</label>
        <input name="file" type="file" accept="application/pdf" onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success" disabled={loading}>
        {loading ? 'Uploading...' : 'Submit Resume'}
      </button>
    </form>
  );
};

export default ResumeApply;
