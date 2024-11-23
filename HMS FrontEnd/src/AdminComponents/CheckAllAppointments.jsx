// import React, { useState } from 'react';
// import AssignDoctorForm from './AssignDoctorForm';
// import './CheckAllAppointments.css'

// function CheckAllAppointments() {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       patientName: 'Afzal Ali',
//       problem: 'Head Ache',
//       appointmentDate: '2023-03-08',
//       doctor: null,
//     },
//     {
//       id: 2,
//       patientName: 'Patient One',
//       problem: 'Leg Pain',
//       appointmentDate: '2023-04-30',
//       doctor: null,
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const [doctors] = useState([
//     { id: 1, name: 'Dr. Arif Khan' },
//     { id: 2, name: 'Dr. William Peterson' },
//   ]);

//   const handleAssignDoctorClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedAppointment(null);
//   };

//   const handleAssignDoctor = (appointmentId, doctorName) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.map((appointment) =>
//         appointment.id === appointmentId
//           ? { ...appointment, doctor: doctorName }
//           : appointment
//       )
//     );
//     alert(`Doctor ${doctorName} assigned successfully!`);
//   };

//   return (
//     <div>
//       <h1>All Appointments</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Problem</th>
//             <th>Appointment Date</th>
//             <th>Doctor</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment.id}>
//               <td>{appointment.patientName}</td>
//               <td>{appointment.problem}</td>
//               <td>{appointment.appointmentDate}</td>
//               <td>{appointment.doctor || 'Not Assigned'}</td>
//               <td>
//                 {appointment.doctor ? (
//                   <button disabled>Assigned to Doctor</button>
//                 ) : (
//                   <button
//                     onClick={() => handleAssignDoctorClick(appointment)}
//                   >
//                     Assign to Doctor
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showForm && selectedAppointment && (
//         <AssignDoctorForm
//           appointment={selectedAppointment}
//           doctors={doctors}
//           onClose={handleCloseForm}
//           onSubmit={handleAssignDoctor}
//         />
//       )}
//     </div>
//   );
// }

// export default CheckAllAppointments;




// import React, { useState } from 'react';
// import AssignDoctorForm from './AssignDoctorForm';
// import './CheckAllAppointments.css';

// function CheckAllAppointments() {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       patientName: 'Afzal Ali',
//       problem: 'Head Ache',
//       appointmentDate: '2023-03-08',
//       doctor: null,
//       status: 'Pending', // Add status to track appointment state
//     },
//     {
//       id: 2,
//       patientName: 'Patient One',
//       problem: 'Leg Pain',
//       appointmentDate: '2023-04-30',
//       doctor: null,
//       status: 'Pending',
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const [doctors] = useState([
//     { id: 1, name: 'Dr. Arif Khan' },
//     { id: 2, name: 'Dr. William Peterson' },
//   ]);

//   const handleAssignDoctorClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedAppointment(null);
//   };

//   const handleAssignDoctor = (appointmentId, doctorName) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.map((appointment) =>
//         appointment.id === appointmentId
//           ? { ...appointment, doctor: doctorName, status: 'Assigned' }
//           : appointment
//       )
//     );
//     alert(`Doctor ${doctorName} assigned successfully!`);
//   };

//   const handleCancelAppointment = (appointmentId) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.map((appointment) =>
//         appointment.id === appointmentId
//           ? { ...appointment, status: 'Cancelled', doctor: null }
//           : appointment
//       )
//     );
//     alert('Appointment cancelled successfully!');
//   };

//   return (
//     <div>
//       <h1 className='admincheckh1'>All Appointments</h1>
//       <table className='adminchecktable'>
//         <thead className='admincheckthead'>
//           <tr>
//             <th>Patient Name</th>
//             <th>Problem</th>
//             <th>Appointment Date</th>
//             <th>Doctor</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment.id}>
//               <td>{appointment.patientName}</td>
//               <td>{appointment.problem}</td>
//               <td>{appointment.appointmentDate}</td>
//               <td>{appointment.doctor || 'Not Assigned'}</td>
//               <td>{appointment.status}</td>
//               <td>
//                 {appointment.status === 'Pending' && (
//                   <button className='admincheckbutton'
//                     onClick={() => handleAssignDoctorClick(appointment)}
//                   >
//                     Assign to Doctor
//                   </button>
//                 )}
//                 {appointment.status === 'Assigned' && (
//                   <button className='admincheckbutton' disabled>Assigned to Doctor</button>
//                 )}
//                 {appointment.status === 'Cancelled' && (
//                   <button className='admincheckbutton' disabled>Cancelled</button>
//                 )}
//                 {appointment.status === 'Pending' && !appointment.doctor && (
//                   <div className="cancel-btn-container">
//                     <button className='admincheckbuttoncancel'
                      
//                       onClick={() => handleCancelAppointment(appointment.id)}
//                     >
//                       Cancel Appointment
//                     </button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showForm && selectedAppointment && (
//         <AssignDoctorForm
//           appointment={selectedAppointment}
//           doctors={doctors}
//           onClose={handleCloseForm}
//           onSubmit={handleAssignDoctor}
//         />
//       )}
//     </div>
//   );
// }

// export default CheckAllAppointments;




import React, { useState, useEffect } from 'react';
import AssignDoctorForm from './AssignDoctorForm';
import './CheckAllAppointments.css';

function CheckAllAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [doctors] = useState([
    { id: 1, name: 'Dr. Rachel Adams' },
    { id: 2, name: 'Dr. Michael Green' },
  ]);

  // Fetch appointments from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/appointments');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to fetch appointments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleAssignDoctorClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedAppointment(null);
  };

  const handleAssignDoctor = (appointmentId, doctorName) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, doctorName: doctorName, appointmentStatus: 'Assigned' }
          : appointment
      )
    );
    alert(`Doctor ${doctorName} assigned successfully!`);
  };

  const handleCancelAppointment = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, appointmentStatus: 'Cancelled', doctorName: null }
          : appointment
      )
    );
    alert('Appointment cancelled successfully!');
  };

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h1 className="admincheckh1">All Appointments</h1>
      <table className="adminchecktable">
        <thead className="admincheckthead">
          <tr>
            <th>Patient Name</th>
            <th>Contact</th>
            <th>Problem</th>
            <th>Doctor</th>
            <th>Prescription</th>
            <th>Appointment Date</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.patientContact}</td>
              <td>{appointment.problem}</td>
              <td>{appointment.doctorName || 'Not Assigned'}</td>
              <td>{appointment.prescription || 'N/A'}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentStatus}</td>
              <td>${appointment.appointmentPrice.toFixed(2)}</td>
              <td>
                {appointment.appointmentStatus === 'Pending' && (
                  <button
                    className="admincheckbutton"
                    onClick={() => handleAssignDoctorClick(appointment)}
                  >
                    Assign to Doctor
                  </button>
                )}
                {appointment.appointmentStatus === 'Assigned' && (
                  <button className="admincheckbutton" disabled>
                    Assigned
                  </button>
                )}
                {appointment.appointmentStatus === 'Cancelled' && (
                  <button className="admincheckbutton" disabled>
                    Cancelled
                  </button>
                )}
                {appointment.appointmentStatus === 'Completed' && (
                  <button className="admincheckbutton" disabled>
                    Completed
                  </button>
                )}
                {appointment.appointmentStatus === 'Pending' && (
                  <button
                    className="admincheckbuttoncancel"
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && selectedAppointment && (
        <AssignDoctorForm
          appointment={selectedAppointment}
          doctors={doctors}
          onClose={handleCloseForm}
          onSubmit={handleAssignDoctor}
        />
      )}
    </div>
  );
}

export default CheckAllAppointments;





