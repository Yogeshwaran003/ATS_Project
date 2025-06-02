import React from 'react';

const Footer = () => (
  <footer className="bg-light text-center py-3 mt-5">
    <div className="container">
      <span className="text-muted">&copy; {new Date().getFullYear()} ATS. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
