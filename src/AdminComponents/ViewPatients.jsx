// import React from 'react';

// function ViewPatients() {
//   return <h1>View Patients Page</h1>;
// }
// export default ViewPatients;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ViewPatients.css'; // Import the CSS file for styling

// function ViewPatients() {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/patients')
//       .then(response => {
//         setPatients(response.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to fetch data');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading patients data...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div className="view-patients-container">
//       <h1>View Patients</h1>
//       <table className="patients-table">
//         <thead>
//           <tr>
//             <th>Patient ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>Mobile Number</th>
//             <th>Street</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip Code</th>
//             <th>Aadhar Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient) => (
//             <tr key={patient.patientId}>
//               <td>{patient.patientId}</td>
//               <td>{patient.firstName}</td>
//               <td>{patient.lastName}</td>
//               <td>{patient.emailId}</td>
//               <td>{patient.gender}</td>
//               <td>{patient.mobileNumber}</td>
//               <td>{patient.street}</td>
//               <td>{patient.city}</td>
//               <td>{patient.state}</td>
//               <td>{patient.zipCode}</td>
//               <td>{patient.aadharNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewPatients;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewPatients.css'; // Import the CSS file for styling

function ViewPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/patients')
      .then(response => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const handleDelete = (patientId) => {
    // Call the backend API to delete the patient
    axios.delete(`http://localhost:8080/api/patients/${patientId}`)
      .then(() => {
        setPatients(patients.filter(patient => patient.patientId !== patientId));
      })
      .catch(err => {
        console.error("Error deleting patient", err);
        setError('Failed to delete patient');
      });
  };

  if (loading) {
    return <h2>Loading patients data...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="view-patients-container">
      <h1>View Patients</h1>
      <table className="patients-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Aadhar Number</th>
            <th>Action</th> {/* Column for the Delete button */}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.emailId}</td>
              <td>{patient.gender}</td>
              <td>{patient.mobileNumber}</td>
              <td>{patient.street}</td>
              <td>{patient.city}</td>
              <td>{patient.state}</td>
              <td>{patient.zipCode}</td>
              <td>{patient.aadharNumber}</td>
              <td>
                {/* Delete button */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(patient.patientId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPatients;


