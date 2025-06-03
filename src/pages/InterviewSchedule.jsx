import React, { useState } from 'react';

const InterviewSchedule = () => {
  const [formData, setFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    jobTitle: '',
    recruiterEmail: '',
    interviewType: '',
    interviewDate: '',
    startTime: '',
    endTime: '',
    location: '',
    interviewers: ''
  });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically send the email using your backend API
    setSuccess('Interview scheduled successfully! Email invites have been sent.');
    setFormData({
      candidateName: '',
      candidateEmail: '',
      jobTitle: '',
      recruiterEmail: '',
      interviewType: '',
      interviewDate: '',
      startTime: '',
      endTime: '',
      location: '',
      interviewers: ''
    });
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Schedule Interview</h2>
          {success && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {success}
              <button type="button" className="btn-close" onClick={() => setSuccess(null)}></button>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Candidate Information */}
            <div className="col-12 mb-3">
              <h5 className="text-muted">Candidate Information</h5>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Candidate Name*</label>
              <input
                type="text"
                className="form-control"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Candidate Email*</label>
              <input
                type="email"
                className="form-control"
                name="candidateEmail"
                value={formData.candidateEmail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Job and Recruiter Information */}
            <div className="col-12 mb-3 mt-4">
              <h5 className="text-muted">Position Details</h5>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Job Title/Position*</label>
              <input
                type="text"
                className="form-control"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Recruiter/HR Email*</label>
              <input
                type="email"
                className="form-control"
                name="recruiterEmail"
                value={formData.recruiterEmail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Interview Details */}
            <div className="col-12 mb-3 mt-4">
              <h5 className="text-muted">Interview Details</h5>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Interview Type*</label>
              <select
                className="form-select"
                name="interviewType"
                value={formData.interviewType}
                onChange={handleChange}
                required
              >
                <option value="">Select Interview Type</option>
                <option value="technical">Technical</option>
                <option value="hr">HR</option>
                <option value="cultural">Cultural Fit</option>
                <option value="final">Final Round</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Interview Date*</label>
              <input
                type="date"
                className="form-control"
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Start Time*</label>
              <input
                type="time"
                className="form-control"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">End Time*</label>
              <input
                type="time"
                className="form-control"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>

            {/* Location and Interviewers */}
            <div className="col-12">
              <label className="form-label">Location / Meeting Link*</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter physical location or virtual meeting link"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Interviewers (comma separated)*</label>
              <input
                type="text"
                className="form-control"
                name="interviewers"
                value={formData.interviewers}
                onChange={handleChange}
                required
                placeholder="Enter interviewer email addresses separated by commas"
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-envelope-fill me-2"></i>
                Send Interview Invites
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedule;
