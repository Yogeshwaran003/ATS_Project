import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';

// Import pages (to be implemented)
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import CandidateDetailsPage from './pages/CandidateDetailsPage';
import JobCreate from './pages/JobCreate';
import Career from './pages/Career';
import JobApplyPage from './pages/JobApplyPage';
import ResumeIntakePage from './pages/ResumeIntakePage';
import InterviewSchedule from './pages/InterviewSchedule';
import InterviewFeedback from './pages/InterviewFeedback';
import OfferPage from './pages/OfferPage';
import Report from './pages/Report';
import JobsListPage from './pages/JobsListPage';
import ResumesListPage from './pages/ResumesListPage';
import ResumeDetailsPage from './pages/ResumeDetailsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import JobEditPage from './pages/JobEditPage';
import JobResumesPage from './pages/JobResumesPage';
import PublicJobDetailsPage from './pages/PublicJobDetailsPage';
import HomePage from './pages/HomePage';
import PipeLineReport from './pages/PipeLineReport';
import QualityReport from './pages/QualityReport';
import DiversityCandidateReport from './pages/DiversityCandidateReport';
import PerformanceReport from './pages/PerformanceReport';
import AttendanceReport from './pages/AttendanceReport';
import EngagementReport from './pages/EngagementReport';

// Simple auth check (replace with real auth logic)
// const isAuthenticated = () => !!localStorage.getItem('token');
const isAuthenticated = () => true

function PrivateRoute({ children }) {
  const location = useLocation();
  return isAuthenticated() ? (
    <AdminLayout>{children}</AdminLayout>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public routes with Navbar and Footer */}
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/career" element={<PublicLayout><Career /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
      <Route path="/jobs/:jobId/apply" element={<PublicLayout><JobApplyPage /></PublicLayout>} />
      <Route path="/public/jobs/:jobId" element={<PublicLayout><PublicJobDetailsPage /></PublicLayout>} />
      
      {/* Private (admin) routes with SideNav */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/jobs" element={<PrivateRoute><JobsListPage /></PrivateRoute>} />
      <Route path="/jobs/create" element={<PrivateRoute><JobCreate /></PrivateRoute>} />
      <Route path="/jobs/:jobId" element={<PrivateRoute><JobDetailsPage /></PrivateRoute>} />
      <Route path="/jobs/:jobId/edit" element={<PrivateRoute><JobEditPage /></PrivateRoute>} />
      <Route path="/jobs/:jobId/resumes" element={<PrivateRoute><JobResumesPage /></PrivateRoute>} />
      <Route path="/resumes/:resumeId" element={<PrivateRoute><ResumeDetailsPage /></PrivateRoute>} />
      <Route path="/resumes/:resumeId/details" element={<PrivateRoute><CandidateDetailsPage /></PrivateRoute>} />
      <Route path="/candidates" element={<PrivateRoute><ResumesListPage /></PrivateRoute>} />
      <Route path="/calendar" element={<PrivateRoute><InterviewSchedule /></PrivateRoute>} />
      <Route path="/reports" element={<PrivateRoute><Report/></PrivateRoute>} />
      <Route path="/reports/pipeline" element={<PrivateRoute><PipeLineReport /></PrivateRoute>} />
      <Route path="/reports/quality" element={<PrivateRoute><QualityReport /></PrivateRoute>} />
      <Route path="/reports/diversity" element={<PrivateRoute><DiversityCandidateReport /></PrivateRoute>} />
      <Route path="/reports/performance" element={<PrivateRoute><PerformanceReport /></PrivateRoute>} />
      <Route path="/reports/attendance" element={<PrivateRoute><AttendanceReport /></PrivateRoute>} />
      <Route path="/reports/engagement" element={<PrivateRoute><EngagementReport /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><div className="p-4"><h2>Settings</h2><p>Settings page coming soon.</p></div></PrivateRoute>} />
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
