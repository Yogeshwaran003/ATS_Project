import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const JobCreate = () => {
  const navigate = useNavigate();
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
    mobile: '',
    status: 'open'
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
        mobile: form.mobile,
        status: form.status
      });
      setSuccess('Job created successfully!');
      setTimeout(() => navigate('/jobs'), 1500);
    } catch (err) {
      setError('Failed to create job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Job</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Short Description</label>
              <input
                type="text"
                className="form-control"
                name="short_description"
                value={form.short_description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Skills (comma separated)</label>
              <input
                type="text"
                className="form-control"
                name="skill_set"
                value={form.skill_set}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                type="text"
                className="form-control"
                name="experience"
                value={form.experience}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                value={form.type}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Vacancies</label>
              <input
                type="text"
                className="form-control"
                name="vacancies"
                value={form.vacancies}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CTC Range</label>
              <input
                type="text"
                className="form-control"
                name="ctc_range"
                value={form.ctc_range}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Hours</label>
              <input
                type="text"
                className="form-control"
                name="hours"
                value={form.hours}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Created By</label>
              <input
                type="text"
                className="form-control"
                name="created_by"
                value={form.created_by}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Info</label>
              <input
                type="text"
                className="form-control"
                name="contact_info"
                value={form.contact_info}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Job'}
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary ms-2"
            onClick={() => navigate('/jobs')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobCreate;
