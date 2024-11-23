import React, { useState } from 'react';
import './DoctorRegisterStyle.css';

const DoctorRegister = ({ toggleRegister }) => {
  const [formData, setFormData] = useState({
    doctorID: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dob: '',
    mobileNumber: '',
    address: '',
    specialization: '',
    licenseNumber: '',
    dateOfJoining: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          doctorID: '',
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          dob: '',
          mobileNumber: '',
          address: '',
          specialization: '',
          licenseNumber: '',
          dateOfJoining: '',
          password: '',
        });
        alert('Doctor registered successfully!');
      } else {
        alert('Failed to register doctor.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the doctor.');
    }
  };

  return (
    <div className="registerFormContainer">
      {/* <p className="cancelButton" onClick={toggleRegister}>X</p> */}
      <h2 className="formTitle">Doctor Profile </h2>
      <form onSubmit={handleSubmit} className="doctorRegisterForm">
        <div className="formFieldsGrid">
          {/* Doctor ID */}
          <div className="formFieldGroup">
            <label htmlFor="doctorID" className="inputLabel">Doctor ID</label>
            <input
              type="text"
              id="doctorID"
              name="doctorID"
              className="inputField"
              placeholder="e.g., D01"
              value={formData.doctorID}
              onChange={handleChange}
            />
            {errors.doctorID && <span className="errorText">{errors.doctorID}</span>}
          </div>

          {/* First Name */}
          <div className="formFieldGroup">
            <label htmlFor="firstName" className="inputLabel">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="inputField"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="errorText">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="formFieldGroup">
            <label htmlFor="lastName" className="inputLabel">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="inputField"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="errorText">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="formFieldGroup">
            <label htmlFor="email" className="inputLabel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="inputField"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>

          {/* Gender */}
          <div className="formFieldGroup">
            <label htmlFor="gender" className="inputLabel">Gender</label>
            <select
              id="gender"
              name="gender"
              className="inputField"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="errorText">{errors.gender}</span>}
          </div>

          {/* Date of Birth */}
          <div className="formFieldGroup">
            <label htmlFor="dob" className="inputLabel">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="inputField"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <span className="errorText">{errors.dob}</span>}
          </div>

          {/* Mobile Number */}
          <div className="formFieldGroup">
            <label htmlFor="mobileNumber" className="inputLabel">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              className="inputField"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && <span className="errorText">{errors.mobileNumber}</span>}
          </div>

          {/* Address */}
          <div className="formFieldGroup">
            <label htmlFor="address" className="inputLabel">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="inputField"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="errorText">{errors.address}</span>}
          </div>

          {/* Specialization */}
          <div className="formFieldGroup">
            <label htmlFor="specialization" className="inputLabel">Specialization</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              className="inputField"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
            {errors.specialization && <span className="errorText">{errors.specialization}</span>}
          </div>

          {/* License Number */}
          <div className="formFieldGroup">
            <label htmlFor="licenseNumber" className="inputLabel">License Number</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              className="inputField"
              placeholder="License Number"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
            {errors.licenseNumber && <span className="errorText">{errors.licenseNumber}</span>}
          </div>

          {/* Date of Joining */}
          <div className="formFieldGroup">
            <label htmlFor="dateOfJoining" className="inputLabel">Date of Joining</label>
            <input
              type="date"
              id="dateOfJoining"
              name="dateOfJoining"
              className="inputField"
              value={formData.dateOfJoining}
              onChange={handleChange}
            />
            {errors.dateOfJoining && <span className="errorText">{errors.dateOfJoining}</span>}
          </div>

          {/* Password */}
          <div className="formFieldGroup">
            <label htmlFor="password" className="inputLabel">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="inputField"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="errorText">{errors.password}</span>}
          </div>
        </div>

        <button type="submit" className="submitButton">Update Profile</button>
      </form>
    </div>
  );
};

export default DoctorRegister;