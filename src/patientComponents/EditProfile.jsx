// import React, { useState } from 'react';
// import './EditProfile.css';

// const EditProfileForm = ({pId}) => {
//   const [formData, setFormData] = useState({
//     patientID: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     gender: '',
//     dob: '',
//     mobileNumber: '',
//     aadharNumber: '',
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   });

//   console.log("Id"+pId);
//   const [errors, setErrors] = useState({});
//   const [isFormOpen, setIsFormOpen] = useState(true);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let tempErrors = {};
//     let formIsValid = true;

//     // Validate email
//     if (!formData.email) {
//       tempErrors.email = 'Email is required';
//       formIsValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = 'Email is invalid';
//       formIsValid = false;
//     }

//     // Validate patient ID
//     if (!formData.patientID) {
//       tempErrors.patientID = 'Patient ID is required';
//       formIsValid = false;
//     }

//     // Validate first name
//     if (!formData.firstName) {
//       tempErrors.firstName = 'First Name is required';
//       formIsValid = false;
//     }

//     // Validate last name
//     if (!formData.lastName) {
//       tempErrors.lastName = 'Last Name is required';
//       formIsValid = false;
//     }

//     // Validate mobile number
//     if (!formData.mobileNumber) {
//       tempErrors.mobileNumber = 'Mobile Number is required';
//       formIsValid = false;
//     } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//       tempErrors.mobileNumber = 'Mobile number must be 10 digits';
//       formIsValid = false;
//     }

//     // Validate Aadhar number
//     if (!formData.aadharNumber) {
//       tempErrors.aadharNumber = 'Aadhar Number is required';
//       formIsValid = false;
//     } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
//       tempErrors.aadharNumber = 'Aadhar number must be 12 digits';
//       formIsValid = false;
//     }

//     // Validate street address
//     if (!formData.street) {
//       tempErrors.street = 'Street address is required';
//       formIsValid = false;
//     }

//     // Validate city
//     if (!formData.city) {
//       tempErrors.city = 'City is required';
//       formIsValid = false;
//     }

//     // Validate state
//     if (!formData.state) {
//       tempErrors.state = 'State is required';
//       formIsValid = false;
//     }

//     // Validate zip code
//     if (!formData.zipCode) {
//       tempErrors.zipCode = 'Zip Code is required';
//       formIsValid = false;
//     } else if (!/^\d{6}$/.test(formData.zipCode)) {
//       tempErrors.zipCode = 'Zip Code must be 6 digits';
//       formIsValid = false;
//     }

//     setErrors(tempErrors);
//     return formIsValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert('Profile Updated');
//       // Handle form submission here (e.g., send data to backend)
//     }
//   };

//   // Function to handle form close
//   const handleClose = () => {
//     setIsFormOpen(false); // Close the form
//   };

//   if (!isFormOpen) return null; // Render nothing if form is closed

//   return (
//     <div className="edit-profile-form-container">
//       <p className='cancelButtonRegister' onClick={handleClose}>X</p>
//       <h2 className='header'>Edit Profile</h2>
//       <form onSubmit={handleSubmit} className="edit-profile-form">
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>
          
//           {/* <div className="form-field">
//             <label htmlFor="patientID">Patient ID</label>
//             <input
//               type="text"
//               id="patientID"
//               name="patientID"
//               value={formData.patientID}
//               onChange={handleInputChange}
//             />
//             {errors.patientID && <span className="error">{errors.patientID}</span>}
//           </div> */}
//         </div>

//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             {errors.firstName && <span className="error">{errors.firstName}</span>}
//           </div>

//           <div className="form-field">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//             {errors.lastName && <span className="error">{errors.lastName}</span>}
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="mobileNumber">Mobile Number</label>
//             <input
//               type="text"
//               id="mobileNumber"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleInputChange}
//             />
//             {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
//           </div>

//           <div className="form-field">
//             <label htmlFor="aadharNumber">Aadhar Number</label>
//             <input
//               type="text"
//               id="aadharNumber"
//               name="aadharNumber"
//               value={formData.aadharNumber}
//               onChange={handleInputChange}
//             />
//             {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="street">Street</label>
//             <input
//               type="text"
//               id="street"
//               name="street"
//               value={formData.street}
//               onChange={handleInputChange}
//             />
//             {errors.street && <span className="error">{errors.street}</span>}
//           </div>

//           <div className="form-field">
//             <label htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//             />
//             {errors.city && <span className="error">{errors.city}</span>}
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="state">State</label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//             />
//             {errors.state && <span className="error">{errors.state}</span>}
//           </div>

//           <div className="form-field">
//             <label htmlFor="zipCode">Zip Code</label>
//             <input
//               type="text"
//               id="zipCode"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleInputChange}
//             />
//             {errors.zipCode && <span className="error">{errors.zipCode}</span>}
//           </div>
//         </div>

//         {/* Gender Field Added */}
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="gender">Gender</label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.gender && <span className="error">{errors.gender}</span>}
//           </div>
//         </div>

//         <button type="submit" className="submit-btn">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;





// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './EditProfile.css';

// const EditProfileForm = () => {
//   const location = useLocation();
//   const { patientData } = location.state || {}; // Retrieve passed data

//   const [formData, setFormData] = useState({
//     patientID: patientData?.patientID || '', // Use correct field names from `patientData`
//     firstName: patientData?.firstName || '',
//     lastName: patientData?.lastName || '',
//     email: patientData?.email || '', // Ensure field matches backend data
//     gender: patientData?.gender || '',
//     dob: patientData?.dob || '', // Date of birth field name
//     mobileNumber: patientData?.mobileNumber || '',
//     aadharNumber: patientData?.aadharNumber || '',
//     street: patientData?.street || '',
//     city: patientData?.city || '',
//     state: patientData?.state || '',
//     zipCode: patientData?.zipCode || '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isFormOpen, setIsFormOpen] = useState(true);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let tempErrors = {};
//     let formIsValid = true;

//     // Example validation for required fields
//     if (!formData.firstName) {
//       tempErrors.firstName = 'First Name is required';
//       formIsValid = false;
//     }
//     if (!formData.lastName) {
//       tempErrors.lastName = 'Last Name is required';
//       formIsValid = false;
//     }
//     if (!formData.mobileNumber) {
//       tempErrors.mobileNumber = 'Mobile Number is required';
//       formIsValid = false;
//     } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//       tempErrors.mobileNumber = 'Mobile Number must be 10 digits';
//       formIsValid = false;
//     }

//     setErrors(tempErrors);
//     return formIsValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       fetch(`http://localhost:8080/api/patients/${formData.patientID}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => {
//           if (!response.ok) throw new Error('Failed to update profile.');
//           return response.json();
//         })
//         .then((data) => {
//           alert('Profile updated successfully!');
//           console.log('Updated Data:', data);
//         })
//         .catch((error) => {
//           console.error('Error updating profile:', error);
//         });
//     }
//   };

//   const handleClose = () => {
//     setIsFormOpen(false);
//   };

//   if (!isFormOpen) return null;

//   return (
//     <div className="edit-profile-form-container">
//       <p className="cancelButtonRegister" onClick={handleClose}>
//         X
//       </p>
//       <h2 className="header">Edit Profile</h2>
//       <form onSubmit={handleSubmit} className="edit-profile-form">
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               readOnly // Keep email read-only if it shouldn't be edited
//             />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             {errors.firstName && <span className="error">{errors.firstName}</span>}
//           </div>

//           <div className="form-field">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//             {errors.lastName && <span className="error">{errors.lastName}</span>}
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="mobileNumber">Mobile Number</label>
//             <input
//               type="text"
//               id="mobileNumber"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleInputChange}
//             />
//             {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
//           </div>
//         </div>
//         {/* Repeat fields for address, gender, etc., similarly */}
//         <button type="submit" className="submit-btn">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EditProfile.css';

const EditProfileForm = () => {
  const location = useLocation();
  const { patientId } = location.state?.patientId || {}; // Retrieve passed data

  const [formData, setFormData] = useState({
    patientID: patientId || '', 
    firstName: '',
    lastName: '',
    email:'', 
    gender:  '',
    dob:  '',
    mobileNumber: '',
    aadharNumber:  '',
    street:  '',
    city:  '',
    state: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(patientId);

  const validateForm = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      tempErrors.firstName = 'First Name is required';
      formIsValid = false;
    }
    if (!formData.lastName) {
      tempErrors.lastName = 'Last Name is required';
      formIsValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      formIsValid = false;
    }
    if (!formData.mobileNumber) {
      tempErrors.mobileNumber = 'Mobile Number is required';
      formIsValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = 'Mobile Number must be 10 digits';
      formIsValid = false;
    }
    if (!formData.aadharNumber) {
      tempErrors.aadharNumber = 'Aadhar Number is required';
      formIsValid = false;
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      tempErrors.aadharNumber = 'Aadhar Number must be 12 digits';
      formIsValid = false;
    }
    if (!formData.zipCode) {
      tempErrors.zipCode = 'Zip Code is required';
      formIsValid = false;
    } else if (!/^\d{6}$/.test(formData.zipCode)) {
      tempErrors.zipCode = 'Zip Code must be 6 digits';
      formIsValid = false;
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch(`http://localhost:8080/api/patients/${patientId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) throw new Error('Failed to update profile.');
          return response.json();
        })
        .then((data) => {
          alert('Profile updated successfully!');
          console.log('Updated Data:', data);
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    }
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  if (!isFormOpen) return null;

  return (
    <div className="edit-profile-form-container">
      <p className="cancelButtonRegister" onClick={handleClose}>X</p>
      <h2 className="header">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} readOnly />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
            {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="aadharNumber">Aadhar Number</label>
            <input type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleInputChange} />
            {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} />
          </div>
          <div className="form-field">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
          </div>
          <div className="form-field">
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
            {errors.zipCode && <span className="error">{errors.zipCode}</span>}
          </div>
        </div>
        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfileForm;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './EditProfile.css';

// const EditProfileForm = () => {
//   const location = useLocation();
//   const { patientId } = location.state || {}; // Retrieve patientId from state
//   const [formData, setFormData] = useState({
//     patientID: patientId || '', // Initialize patientID with the passed patientId
//     firstName: '',
//     lastName: '',
//     email: '',
//     gender: '',
//     dob: '',
//     mobileNumber: '',
//     aadharNumber: '',
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isFormOpen, setIsFormOpen] = useState(true);

//   useEffect(() => {
//     if (patientId) {
//       // Fetch the patient details using the patientId
//       fetch(`http://localhost:8080/api/patients/${patientId}`)
//         .then((response) => {
//           if (!response.ok) throw new Error('Failed to fetch patient data.');
//           return response.json();
//         })
//         .then((data) => {
//           setFormData({
//             ...formData,
//             ...data, // Populate formData with fetched patient data
//           });
//         })
//         .catch((error) => console.error('Error fetching patient data:', error));
//     }
//   }, [patientId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       fetch(`http://localhost:8080/api/patients/${formData.patientID}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => {
//           if (!response.ok) throw new Error('Failed to update profile.');
//           return response.json();
//         })
//         .then((data) => {
//           alert('Profile updated successfully!');
//           console.log('Updated Data:', data);
//         })
//         .catch((error) => console.error('Error updating profile:', error));
//     }
//   };

//   const validateForm = () => {
//     let tempErrors = {};
//     let formIsValid = true;

//     if (!formData.firstName) {
//       tempErrors.firstName = 'First Name is required';
//       formIsValid = false;
//     }

//     // Add other validations as needed
//     setErrors(tempErrors);
//     return formIsValid;
//   };

//   const handleClose = () => {
//     setIsFormOpen(false);
//   };

//   if (!isFormOpen) return null;

//   return (
//     <div className="edit-profile-form-container">
//       <p className="cancelButtonRegister" onClick={handleClose}>
//         X
//       </p>
//       <h2 className="header">Edit Profile</h2>
//       <form onSubmit={handleSubmit} className="edit-profile-form">
//         <div className="form-row">
//           <div className="form-field">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             {errors.firstName && <span className="error">{errors.firstName}</span>}
//           </div>
//           <div className="form-field">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//             {errors.lastName && <span className="error">{errors.lastName}</span>}
//           </div>
//         </div>
//         {/* Add other fields as needed */}
//         <button type="submit" className="submit-btn">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;

