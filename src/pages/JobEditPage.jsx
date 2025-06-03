import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const JobEditPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    short_description: '',
    skill_set: '',
    experience: '',
    location: '',
    job_type: '',
    vacancies: '',
    ctc_range: '',
    work_hours: '',
    created_by: '',
    email: '',
    mobile: '',
    status: 'open'
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${jobId}`)
      .then(res => {
        const job = res.data;
        setForm({
          title: job.title || '',
          description: job.description || '',
          short_description: job.short_description || '',
          skill_set: job.skill_set ? job.skill_set.join(', ') : '',
          experience: job.experience || '',
          location: job.location || '',
          job_type: job.job_type || '',
          vacancies: job.vacancies || '',
          ctc_range: job.ctc_range || '',
          work_hours: job.work_hours || '',
          created_by: job.created_by || '',
          email: job.email || '',
          mobile: job.mobile || '',
          status: job.status || 'open'
        });
      })
      .catch(() => setError('Failed to load job details'))
      .finally(() => setLoading(false));
  }, [jobId]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      await api.put(`/jobs/${jobId}`, {
        ...form,
        short_description: form.short_description,
        description: form.description,
        vacancies: parseInt(form.vacancies, 10),
        skill_set: form.skill_set.split(',').map(s => s.trim())
      });
      setSuccess('Job updated successfully!');
      setTimeout(() => navigate(`/jobs/${jobId}`), 1000);
    } catch {
      setError('Failed to update job.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Job</h2>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Skills (comma separated)</label>
          <input name="skill_set" value={form.skill_set} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Short Description</label>
          <input name="short_description" value={form.short_description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Experience</label>
          <input name="experience" value={form.experience} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Type</label>
          <input name="job_type" value={form.job_type} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Vacancies</label>
          <input name="vacancies" type="number" min="1" value={form.vacancies} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">CTC Range</label>
          <input name="ctc_range" value={form.ctc_range} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Work Hours</label>
          <input name="work_hours" value={form.work_hours} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Created By</label>
          <input name="created_by" value={form.created_by} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Mobile</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value="open">Open</option>
            <option value="pending approval">Pending Approval</option>
            <option value="expired">Expired</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobEditPage;
