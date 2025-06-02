import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const location = useLocation();

  // Placeholder user data (replace with actual data from auth context or props)
  const user = {
    name: 'Sarah Connor',
    email: 'sarah.connor@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=sarahconnor' // Placeholder image
  };
  
  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sidenav bg-white shadow-sm">
      <div className="sidenav-header p-3 mb-2 border-bottom">
        <Link to="/dashboard" className="d-flex align-items-center text-decoration-none text-dark">
          <img src={user.imageUrl} alt={user.name} className="rounded-circle me-2" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
          <div>
            <div className="fw-semibold" style={{ fontSize: '0.95rem' }}>{user.name}</div>
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>{user.email}</div>
          </div>
        </Link>
      </div>
      <div className="sidenav-menu p-2">
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link 
              to="/dashboard" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/dashboard') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-house-door me-3 fs-5"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link 
              to="/jobs" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/jobs') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-briefcase me-3 fs-5"></i>
              <span>Jobs</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link 
              to="/candidates" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/candidates') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-people me-3 fs-5"></i>
              <span>Candidates</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link 
              to="/calendar" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/calendar') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-calendar-week me-3 fs-5"></i>
              <span>Calendar</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link 
              to="/reports" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/reports') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-bar-chart me-3 fs-5"></i>
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link 
              to="/settings" 
              className={`nav-link py-2 px-3 rounded-3 d-flex align-items-center ${isActive('/settings') ? 'active bg-light text-primary' : 'text-dark'}`}
            >
              <i className="bi bi-gear me-3 fs-5"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mt-auto p-3 border-top">
        <a 
          href="#" 
          className="nav-link py-2 px-3 rounded-3 d-flex align-items-center text-dark"
          onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}
        >
          <i className="bi bi-box-arrow-right me-3 fs-5"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SideNav;