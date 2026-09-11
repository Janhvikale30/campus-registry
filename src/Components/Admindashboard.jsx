import React from "react";
import { useNavigate } from "react-router-dom";
import "./theme.css";

const Admindashboard = () => {
  const nav = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      {/* Header */}
      <div className="admin-header">
        <h2>Welcome, Admin</h2>
        <p>Manage your portal from here</p>
      </div>

      {/* Body */}
      <div className="admin-body">
        {/* Sidebar */}
        <div className="admin-menu">
          <h5>Admin Menu</h5>

          <button
            className="menu-item"
            onClick={() => nav("/admin-dashboard/studentlist")}
          >
            Student List
          </button>
          <button
            className="menu-item"
            onClick={() => nav("/admin-dashboard/courselist")}
          >
            Course List
          </button>
          <button
            className="menu-item"
            onClick={() => nav("/admin-dashboard/facultylist")}
          >
            Faculty List
          </button>

          <button className="menu-item logout" onClick={() => nav("/login")}>
            Logout
          </button>
        </div>

        {/* Main content */}
        <div className="admin-main">
          <h3>Admin Dashboard</h3>

          <p>
            Select an option from the menu to manage students, courses or
            faculty.
          </p>

          <div className="stat-row">
            <div className="stat-block">
              <h2 style={{ color: "var(--ink)" }}>Students</h2>
              <p>Manage student records</p>
            </div>

            <div className="stat-block">
              <h2 style={{ color: "var(--forest)" }}>Courses</h2>
              <p>Manage available courses</p>
            </div>

            <div className="stat-block">
              <h2 style={{ color: "var(--gold)" }}>Faculty</h2>
              <p>Manage faculty records</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
