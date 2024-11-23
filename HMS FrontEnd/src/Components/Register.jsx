import React, { useState } from 'react';
import './registerStyle.css';

const Register = ({ toggleRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    gender: '',
    dateOfBirth: '',
    mobileNumber: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    aadharNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for the field as the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.emailId) {
      newErrors.emailId = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      newErrors.emailId = 'Invalid email format';
    }
    // if (!formData.gender) newErrors.gender = 'Gender is required';
    // if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    if (!formData.aadharNumber) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be 12 digits';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const requestData = {
      ...formData,
    };

    try {
      const response = await fetch('http://localhost:8080/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Patient registered successfully:', data);
        alert('Registered successfully');
        toggleRegister();

        setFormData({
          firstName: '',
          lastName: '',
          emailId: '',
          gender: '',
          dateOfBirth: '',
          mobileNumber: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          aadharNumber: '',
          password: '',
        });
      } else {
        console.error('Failed to register patient');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="registerContainer">
      <p className="cancelButtonRegister" onClick={toggleRegister}>
        X
      </p>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="form-column">
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="emailId">Email</label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                placeholder="Email Address"
                value={formData.emailId}
                onChange={handleChange}
              />
              {errors.emailId && <p className="error">{errors.emailId}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
          </div>

          <div className="form-column">
            <div className="input-container">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                placeholder="Aadhar Number"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
              {errors.aadharNumber && <p className="error">{errors.aadharNumber}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
