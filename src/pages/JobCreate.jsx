import React, { useState } from 'react';
import api from '../api/api';

const JobCreate = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    short_description: '',
    skill_set: '',
    experience: '',
    location: '',
    type: '',
    vacancies: '',
    ctc_range: '',
    hours: '',
    created_by: '',
    contact_info: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post('/jobs/', {
        title: form.title,
        short_description: form.short_description,
        description: form.description,
        skill_set: form.skill_set.split(',').map(s => s.trim()),
        experience: form.experience,
        location: form.location,
        job_type: form.type,
        vacancies: form.vacancies,
        ctc_range: form.ctc_range,
        work_hours: form.hours,
        created_by: form.created_by,
        email: form.contact_info,
        mobile: form.mobile
      });
      setSuccess('Job created successfully!');
      setForm({
        title: '', description: '', short_description: '', skill_set: '', experience: '', location: '', type: '', vacancies: '', ctc_range: '', hours: '', created_by: '', contact_info: '', mobile: ''
      });
    } catch (err) {
      setError('Failed to create job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create Job</h2>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Short Description</label>
          <input name="short_description" value={form.short_description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Skills (comma separated)</label>
          <input name="skill_set" value={form.skill_set} onChange={handleChange} className="form-control" required />
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
          <input name="type" value={form.type} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Vacancies</label>
          <input name="vacancies" value={form.vacancies} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">CTC Range</label>
          <input name="ctc_range" value={form.ctc_range} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Hours</label>
          <input name="hours" value={form.hours} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Created By</label>
          <input name="created_by" value={form.created_by} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Contact Info</label>
          <input name="contact_info" value={form.contact_info} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Mobile</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Job'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobCreate;
