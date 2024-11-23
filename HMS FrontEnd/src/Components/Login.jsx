import React, { useState } from 'react';
import './styleLogin.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState('patients');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;

  const navigate = useNavigate();  // Initialize useNavigate hook

  // Handle form submission
  // In Login.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted!");

  if (!email || !password) {
    setError('Please fill in both fields');
    setSuccessMessage('');
    return;
  }

  // if (!passwordRegex.test(password)) {
    //   setError('Password must be 6-15 characters long, contain at least one letter, one number, and one special character.');
    //   setSuccessMessage('');
    //   return;
    // }

  try {
    const response = await fetch(`http://localhost:8080/api/${role}/email/${email}`);

    if (!response.ok) {
      console.error("API responded with error:", response.status);
      throw new Error('Invalid login credentials. Please check your email or password.');
    }

    const data = await response.json();
    console.log("Fetched Data:", data);

    // Check if password matches
    if (data.password === password) {
      console.log('Login successful!');
      setSuccessMessage('Login successful!');
      setError('');
     if(role ==="patients"){
      // // Use absolute path for navigation
      navigate('/patient-dashboard', { state: { patientData: data } });  // Correct path here
     }else if(role === "doctors"){
      navigate('/doctor-dashboard');
     }else{
      navigate('/admin-dashboard');
     }
    } else {
      setError('Invalid login credentials. Please check your email or password.');
      setSuccessMessage('');
    }
  } catch (error) {
    console.error("Error during fetch:", error.message);
    setError(error.message);
    setSuccessMessage('');
  }
};



// if (data.password === password) {
//   console.log('Login successful!');
//   setSuccessMessage('Login successful!');
//   setError('');

//   if (role === "patients") {
//     navigate('/patient-dashboard', { state: { patientData: data } }); // Pass user data
//   } else if (role === "doctors") {
//     navigate('/doctor-dashboard');
//   } else {
//     navigate('/admin-dashboard');
//   }
// }









  return (
    <div className="container">
      {/* <span className='cancelButton'>X</span> */}
      
      <form onSubmit={handleSubmit}>
        <div className='role-select'>
          <div  onClick={(e) => setRole("patients")}
            required >Patient</div>
          <div  onClick={(e) => setRole("doctors")}
            required>Doctor</div>
          <div  onClick={(e) => setRole("admin")}
            required>Admin</div>
        </div>
        <h2>{role} Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            maxLength="15"
          />
        </div>

        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}

        <button type="submit">Login</button>
      </form>

      {/* Create New Account Link */}
      <div className="create-account-message">
        {/* <p>Don't have an account? <a onClick={toggleRegister}>Create Patient Account</a></p> */}
        <p>Don't have an account? <Link to={"patient-register"}>Create Patient Account</Link></p>
      </div>
      <Outlet/>
    </div>
  );
};

export default Login;
