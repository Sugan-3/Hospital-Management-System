// import React from 'react';
// import './HomePage.css';
// import { Outlet, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         // navigate("/doctor");
//     };

//     return (
//         <div className="homepage">
//             <nav className="navbar">
//                 <img src={logo} alt="Logo" className="logo" />
//                 <div className="home-btn">Doctor Dashboard</div>
//                 <div className="navbar-buttons">
//                 <Link to="/doctor-dashboard/doctor-profile">
//                   <button className="profile-btn">Profile</button>
//                  </Link>
//                 <button className="logout-btn">Logout</button>
//                 </div>
//             </nav>

//             <div className="content">
//                 <h1>Welcome, Doctor!</h1> 
//                 <br></br>
//                 <Link to="/doctor-dashboard/doctor-dash">
//                 <button className="appointment-btn" onClick={handleClick}>
//                     View My Appointments
//                 </button>
//                 </Link>
//             </div>
//             <Outlet></Outlet>
//         </div>
//     );
// };

// export default HomePage;

import React from 'react';
import './HomePage.css';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Navbar */}
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="home-title">Doctor Dashboard</div>
                <div className="navbar-buttons">
                    <Link to="/doctor-dashboard/doctor-profile">
                        <button className="btn profile-btn">Profile</button>
                    </Link>
                    <button className="btn logout-btn">Logout</button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="content">
                <h1 className="welcome-text">Welcome, Doctor!</h1>
                <p className="welcome-description">Manage your appointments and profile with ease.</p>
                <Link to="/doctor-dashboard/doctor-dash">
                    <button className="btn appointment-btn">View My Appointments</button>
                </Link>
            </div>

            {/* Render additional routes */}
            <Outlet />
        </div>
    );
};

export default HomePage;