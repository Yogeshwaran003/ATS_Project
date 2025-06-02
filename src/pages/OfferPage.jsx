import React, { useState } from 'react';

const OfferPage = () => {
  const [form, setForm] = useState({ ctc: '', role: '', joining: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess('Offer email generated!');
    setForm({ ctc: '', role: '', joining: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Generate Offer</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">CTC</label>
          <input name="ctc" value={form.ctc} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Role</label>
          <input name="role" value={form.role} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Joining Date</label>
          <input name="joining" type="date" value={form.joining} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-warning">Generate Offer Email</button>
        </div>
      </form>
    </div>
  );
};

export default OfferPage;
