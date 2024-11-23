// // App.js
// import { useState } from 'react';
// import './App.css';
// import Login from './Components/Login';
// import Menu from './Components/Menu';
// import Register from './Components/Register';
// import PatientDassboard from './patientComponents/patientDassboard';
// import { Link, Routes, Route} from 'react-router-dom';


// import logoIcon from "./assets/logo.png"
// import menuIcon from "./assets/menu.png"
// import TakeAppointment from './patientComponents/TakeAppointment';
// import ViewAppointment from './patientComponents/ViewAppointment';
// import EditProfile from './patientComponents/EditProfile';
// import AdminDash from './AdminComponents/AdminDash';
// import ViewPatients from './AdminComponents/ViewPatients';
// import ViewDoctors from './AdminComponents/ViewDoctors';
// import CheckAllAppointments from './AdminComponents/CheckAllAppointments';
// import RegisterDoctor from './AdminComponents/RegisterDoctor';


// import { Navigate } from 'react-router-dom';
// import HomePage from './DoctorComponents/HomePage';
// import DoctorDashboard from './DoctorComponents/DoctorDashboard';
// import DoctorRegisterDashboard from './DoctorComponents/DoctorRegisterDoctor';


// function App() {
  
//   const [showMenu,setShowMenu]=useState(false);
  
//   // Function to toggle Menu view
//   const toggleMenu =()=>{
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="headerBar">
//         <div className='logo'>
//          <img src={logoIcon} alt='Logo'></img>
//          <h2 className='title'>  Hospital Management System</h2>
//         </div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
       
//         <div className="menu-item"><Link to={"/home"}>Home</Link></div>
//         <div className="menu-item"><Link to={"/login"}>Login</Link></div>
//         <div className='menuIcon' onClick={toggleMenu}><img src={menuIcon}></img></div>

//         <div></div>
//       </nav>

//       <main className="home-content">
//         {/* Placeholder for main content */}
//         <h1>Welcome to the Hospital Management System</h1>
//         <p>This is the main content area.</p>
//       </main>
      
//       {/* Dropdown Menu */}
//       {showMenu && <Menu />}

//       <main>
//         {/* Routes are defined here */}
//         <Routes>
//           <Route path="/" />
//           <Route index path="/home" />

//           <Route path="/login" element={<Login/>}>
//             <Route path='patient-register' element={<Register/>}></Route>
//           </Route>

//           <Route path='/patient-dashboard' element={<PatientDassboard/>}>
//             {/* <Route path="/" element={<TakeAppointment />} /> */}
//             <Route path="/patient-dashboard/take-appointment" element={<TakeAppointment />} />
//             <Route path="/patient-dashboard/my-appointment" element={<ViewAppointment />} />
//             <Route path="/patient-dashboard/edit-profile" element={<EditProfile/>} />
//             <Route path="/patient-dashboard/logout" element={<Navigate to="/home" replace></Navigate>}/>
//           </Route>

//           <Route path='/doctor-dashboard' element={<HomePage></HomePage>}>
//             <Route path="/doctor-dashboard/doctor-dash" element={<DoctorDashboard />} />
//             <Route path="/doctor-dashboard/doctor-profile" element={<DoctorRegisterDashboard/>} />
//           </Route>

//           <Route path='/admin-dashboard' element={<AdminDash/>}>
//             <Route path="/admin-dashboard/view-patients" element={<ViewPatients />} />
//             <Route path="/admin-dashboard/view-doctors" element={<ViewDoctors />} />
//             <Route path="/admin-dashboard/check-all-appointments" element={<CheckAllAppointments />} />
//             <Route path="/admin-dashboard/register-doctor" element={<RegisterDoctor />} />
//           </Route>
//         </Routes>
//       </main>

//     </>
//   );
// }


// export default App;


import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Register from './Components/Register';
import PatientDassboard from './patientComponents/PatientDassboard';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import logoIcon from "./assets/logo.png";
import menuIcon from "./assets/menu.png";
import TakeAppointment from './patientComponents/TakeAppointment';
import ViewAppointment from './patientComponents/ViewAppointment';
import EditProfile from './patientComponents/EditProfile';
import AdminDash from './AdminComponents/AdminDash';
import ViewPatients from './AdminComponents/ViewPatients';
import ViewDoctors from './AdminComponents/ViewDoctors';
import CheckAllAppointments from './AdminComponents/CheckAllAppointments';
import RegisterDoctor from './AdminComponents/RegisterDoctor';
import { Navigate } from 'react-router-dom';
import HomePage from './DoctorComponents/HomePage';
import DoctorDashboard from './DoctorComponents/DoctorDashboard';
import DoctorRegisterDashboard from './DoctorComponents/DoctorRegisterDoctor';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  
  // Function to toggle Menu view
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <nav className="headerBar">
        <div className='logo'>
          <img src={logoIcon} alt='Logo'></img>
          <h2 className='title'>Hospital Management System</h2>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="menu-item"><Link to="/home">Home</Link></div>
        <div className="menu-item"><Link to="/login">Login</Link></div>
        <div className='menuIcon' onClick={toggleMenu}><img src={menuIcon} alt="menu icon" /></div>
        <div></div>
      </nav>

      {/* <main className="home-content">
        <h1>Welcome to the Hospital Management System</h1>
        <p>This is the main content area.</p>
      </main> */}

      {/* Dropdown Menu */}
      {showMenu && <Menu />}

      <main>
        {/* Routes are defined here */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to home by default */}

          <Route path="/home" element={<h2>Welcome to the Hospital Management System</h2>} />

          <Route path="/login" element={<Login />}>
            <Route path="patient-register" element={<Register />} />
          </Route>

          <Route path="/patient-dashboard" element={<PatientDassboard />}>
            <Route path="take-appointment" element={<TakeAppointment />} />
            <Route path="my-appointment" element={<ViewAppointment />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="logout" element={<Navigate to="/home" replace />} />
          </Route>

          <Route path="/doctor-dashboard" element={<HomePage />}>
            <Route path="doctor-dash" element={<DoctorDashboard />} />
            <Route path="doctor-profile" element={<DoctorRegisterDashboard />} />
          </Route>

          <Route path="/admin-dashboard" element={<AdminDash />}>
            <Route path="view-patients" element={<ViewPatients />} />
            <Route path="view-doctors" element={<ViewDoctors />} />
            <Route path="check-all-appointments" element={<CheckAllAppointments />} />
            <Route path="register-doctor" element={<RegisterDoctor />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
