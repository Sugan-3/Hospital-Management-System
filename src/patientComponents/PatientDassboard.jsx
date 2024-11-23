import React, { useState } from 'react';
import { Link,Outlet,useLocation } from 'react-router-dom';
import './patientDassboardStyle.css';

import logoIcon from "./logo.png";
import profileIcon from "./menu.png";


function PatientDashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);
  const location = useLocation(); // Hook to access location and state
  const patientData = location.state?.patientData || {};

  console.log("from dash"+patientData.patientId);
  //console.log(patientData.patientId);
  return (
    <div className='con'>
      <nav className="headerBar">
        <div className="logo">
          <img src={logoIcon} alt="logo" />
          <h2 className="title">Patient Dashboard</h2>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="nav-links">
          <Link to="/patient-dashboard/take-appointment" className="nav-link">Book Appointment</Link>
          {/* <Link to="/patient-dashboard/my-appointment" className="nav-link">View Appointment</Link> */}

          <Link 
  to="/patient-dashboard/my-appointment" 
  state={{ patientData }} // Pass patientData as state 
  
className="nav-link" >
  <button>View Appointment</button>
</Link>

          
        </div>

        <div className="profile-section">
          <img
            src={profileIcon}
            alt="Profile"
            className="profile-icon"
            onClick={toggleProfileMenu}
          />
          {showProfileMenu && (
            <div className="profile-dropdown">
              {/* <Link to="/patient-dashboard/edit-profile">
                <button>Edit Profile</button>
              </Link> */}
              <Link 
                  to="/patient-dashboard/edit-profile" 
                  state={{ patientId: patientData.patientId}} // Pass patientId as state
                >
                  <button>Edit Profile</button>
                </Link>

              
              <Link to={"/patient-dashboard/logout"}><button onClick={() => alert("Logged out")}>Log Out</button></Link>
              
            </div>
          )}
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default PatientDashboard;
