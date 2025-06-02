import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: 'bi-file-earmark-plus',
    title: 'Create Job Posts in Minutes',
    desc: 'Easily publish job listings with our intuitive job post builder.'
  },
  {
    icon: 'bi-people',
    title: 'Employee Management',
    desc: 'Track employees, teams, and ensure seamless onboarding.'
  },
  {
    icon: 'bi-person-badge',
    title: 'Candidate Management',
    desc: 'Simplify the hiring process with powerful candidate tracking.'
  },
  {
    icon: 'bi-bar-chart',
    title: 'Smart Reporting & Analytics',
    desc: 'Gain insights with detailed reports on your hiring funnel.'
  }
];

const HomePage = () => (
  <div className="home-hero-bg">
    {/* Hero Section */}
    <div className="container py-5">
      <div className="row align-items-center justify-content-center g-4">
        <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 text-primary">Streamline Your Recruitment Process</h1>
          <p className="lead text-dark mb-4 fs-4">Efficiently hire top talent, manage candidates, and grow your team—all in one place</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
            <Link to="/career" className="btn btn-lg btn-primary px-4 py-2 fw-semibold shadow">Get Started Today</Link>
            <a href="#demo" className="btn btn-lg btn-outline-primary px-4 py-2 fw-semibold shadow">Request a Demo</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Recruitment" className="img-fluid rounded-4 shadow home-hero-img" style={{maxHeight: 340}} />
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 fs-2">All-in-One Recruitment and Employee Management</h2>
      <div className="row g-4 justify-content-center">
        {features.map((f, i) => (
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div className="card h-100 text-center border-0 shadow-sm p-3">
              <div className="mb-3">
                <i className={`bi ${f.icon} text-primary`} style={{fontSize: '2.2rem'}}></i>
              </div>
              <h5 className="fw-semibold mb-2">{f.title}</h5>
              <p className="text-muted small mb-0">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Suite Section */}
    <div className="suite-section py-5">
      <div className="container text-center">
        <h3 className="fw-bold text-white mb-3 fs-2">Create your complete talent acquisition suite</h3>
        <p className="text-white-50 mb-4 fs-5">Hiring for more than 10 roles at once and looking for a comprehensive solution? Start with ATS and add additional products as needed.</p>
        <a href="#pricing" className="btn btn-light btn-lg px-5">Set pricing</a>
      </div>
    </div>

    {/* Testimonial Section */}
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card p-4 shadow-sm border-0">
            <div className="row align-items-center g-3">
              <div className="col-md-2 text-center">
                <i className="bi bi-chat-quote text-primary" style={{fontSize: '2.5rem'}}></i>
              </div>
              <div className="col-md-10">
                <h5 className="fw-bold mb-1 text-primary">What Our Users Are Saying</h5>
                <p className="mb-2 fs-5"><span className="text-primary display-6 lh-1 me-2">“</span>Since switching to ATS, our hiring process has become 50% faster. The candidate management tools and smart reporting have transformed how we recruit!</p>
                <div className="d-flex align-items-center mt-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="rounded-circle me-2" style={{width: 40, height: 40, objectFit: 'cover'}} />
                  <div>
                    <div className="fw-semibold">Sarah Nguyen</div>
                    <div className="text-muted small">HR Manager, TechFusion Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Demo Form Section */}
    <div className="suite-section py-5" id="demo">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card p-4 shadow border-0">
              <h4 className="fw-bold mb-3 text-primary">See ATS in Action!</h4>
              <p className="mb-3 text-muted">Discover how our platform can help streamline your recruitment and workforce management</p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control form-control-lg" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Company Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Phone Number" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="ATS Demo" className="img-fluid rounded-4 shadow home-hero-img" style={{maxHeight: 340}} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
