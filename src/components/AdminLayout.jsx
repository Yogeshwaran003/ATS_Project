import React from 'react';
import SideNav from './SideNav';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout d-flex">
      <SideNav />
      <div className="admin-content flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;