// ViewDoctors.jsx
// import React from 'react';

// function ViewDoctors() {
//   return <h1>View Doctors Page</h1>;
// }
// export default ViewDoctors;

import React, { useEffect, useState } from 'react';
import './ViewDoctors.css'; // Optional: For styling, create if needed

function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch doctors data when the component is mounted
    fetch('http://localhost:8080/api/doctors')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="view-doctors-container">
      <h1>Doctors List</h1>
      <table className="doctors-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
            <th>Contact Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contactNumber}</td>
              <td>{doctor.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDoctors;
