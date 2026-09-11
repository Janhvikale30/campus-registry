import React from "react";
import { NavLink } from "react-router-dom";
import "./theme.css";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="site-nav">
        <div className="wordmark">Campus Registry</div>

        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          <h1 className="font-display">
            Run the registrar's office at a glance.
          </h1>

          <p>
            One place to manage students, courses and faculty — built for
            administrators who need clarity over clutter.
          </p>

          <NavLink to="/login" className="btn-primary-ledger">
            Get started
          </NavLink>
        </div>

        <div className="ledger-card">
          <h2>Admin Portal</h2>

          <div className="ledger-row">
            <span>Students</span>
            <span>Enrolment records</span>
          </div>
          <div className="ledger-row">
            <span>Courses</span>
            <span>Curriculum &amp; scheduling</span>
          </div>
          <div className="ledger-row">
            <span>Faculty</span>
            <span>Staff directory</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
