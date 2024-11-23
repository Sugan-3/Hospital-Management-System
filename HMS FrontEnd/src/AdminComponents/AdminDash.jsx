// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './AdminDash.css';
import logoIcon from "../assets/logo.png";


function App() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

  return (
    <div>
      <div>
        <nav className="headerBar">
          <div className="logo">
            <img src={logoIcon} alt="logo" />
            <h2 className="title">Admin Dashboard</h2>
          </div>

          <div className="nav-links">
            <Link to="/admin-dashboard/view-patients" className="nav-link">View Patients</Link>
            <Link to="/admin-dashboard/view-doctors" className="nav-link">View Doctors</Link>
            <Link to="/admin-dashboard/check-all-appointments" className="nav-link">Check All Appointments</Link>
            <Link to="/admin-dashboard/register-doctor" className="nav-link">Register Doctor</Link>
            <div
              className="nav-link"
              onClick={() => alert("Logged out")}>
              Logout
            </div>
          </div>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
