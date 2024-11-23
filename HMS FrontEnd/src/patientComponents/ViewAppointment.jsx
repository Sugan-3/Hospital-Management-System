// // // import React, { useState, useEffect } from 'react';
// // // import './ViewAppointment.css';

// // // function ViewAppointment() {
// // //   const [appointments, setAppointments] = useState([]);
// // //   const [error, setError] = useState(null);

// // //   // Fetch appointments from backend
// // //   useEffect(() => {
// // //     fetch('/api/appointments')
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error(`Error: ${response.status} ${response.statusText}`);
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => setAppointments(data))
// // //       .catch(error => {
// // //         console.error("Error fetching appointments:", error);
// // //         setError('There was an issue fetching the appointments. Please try again.');
// // //       });
// // //   }, []);

// // //   // Handle cancel appointment
// // //   const cancelAppointment = (appointmentId) => {
// // //     fetch(`/api/appointments/${appointmentId}`, { method: 'DELETE' })
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error('Failed to cancel appointment');
// // //         }
// // //         setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== appointmentId));
// // //         alert("Appointment canceled successfully.");
// // //       })
// // //       .catch(error => {
// // //         console.error("Error canceling appointment:", error);
// // //         alert("There was an issue canceling the appointment.");
// // //       });
// // //   };

// // //   return (
// // //     <div className="view-appointment">
// // //       <h1>Appointments</h1>
// // //       {error && <div className="error-message">{error}</div>}
// // //       <table className="appointment-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Patient Name</th>
// // //             <th>Patient Contact</th>
// // //             <th>Problem</th>
// // //             <th>Doctor Name</th>
// // //             <th>Prescription</th>
// // //             <th>Appointment Taken Date</th>
// // //             <th>Appointment Date</th>
// // //             <th>Appointment Status</th>
// // //             <th>Appointment Price</th>
// // //             <th>Action</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {appointments.length > 0 ? (
// // //             appointments.map(app => (
// // //               <tr key={app.id}>
// // //                 <td>{app.patientName || 'N/A'}</td>
// // //                 <td>{app.patientContact || 'N/A'}</td>
// // //                 <td>{app.problem || 'N/A'}</td>
// // //                 <td>{app.doctorName || 'N/A'}</td>
// // //                 <td>{app.prescription || 'N/A'}</td>
// // //                 <td>{app.takenDate ? new Date(app.takenDate).toLocaleDateString() : 'N/A'}</td>
// // //                 <td>{app.appointmentDate ? new Date(app.appointmentDate).toLocaleDateString() : 'N/A'}</td>
// // //                 <td>{app.status || 'N/A'}</td>
// // //                 <td>{app.price || 'N/A'}</td>
// // //                 <td>
// // //                   <button className="cancel-button" onClick={() => cancelAppointment(app.id)}>
// // //                     Cancel
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="10">No appointments found.</td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // }

// // // export default ViewAppointment;




// // import React, { useState, useEffect } from 'react';
// // import './ViewAppointment.css';

// // function ViewAppointment() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetch('http://localhost:8080/api/appointments')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error(`Error: ${response.status} ${response.statusText}`);
// //         }
// //         return response.json();
// //       })
// //       .then(data => setAppointments(data))
// //       .catch(error => {
// //         console.error("Error fetching appointments:", error);
// //         setError('There was an issue fetching the appointments. Please try again.');
// //       });
// //   }, []);

// //   // const cancelAppointment = (appointmentId) => {
// //   //   fetch(`http://localhost:8080/api/appointments/${appointmentId}`, { method: 'DELETE' })
// //   //     .then(response => {
// //   //       if (!response.ok) {
// //   //         throw new Error('Failed to cancel appointment');
// //   //       }
// //   //       setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== appointmentId));
// //   //       alert("Appointment canceled successfully.");
// //   //     })
// //   //     .catch(error => {
// //   //       console.error("Error canceling appointment:", error);
// //   //       alert("There was an issue canceling the appointment.");
// //   //     });
// //   // };

// //   const cancelAppointment = (appointmentId) => {
// //     fetch(`http://localhost:8080/api/appointments/${appointmentId}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ status: 'Canceled' }),
// //     })
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to update appointment status');
// //         }
// //         return response.json();
// //       })
// //       .then(updatedAppointment => {
// //         setAppointments(prevAppointments =>
// //           prevAppointments.map(app =>
// //             app.id === appointmentId ? { ...app, status: updatedAppointment.status } : app
// //           )
// //         );
// //         alert("Appointment status updated to 'Canceled'.");
// //       })
// //       .catch(error => {
// //         console.error("Error updating appointment status:", error);
// //         alert("There was an issue updating the appointment status.");
// //       });
// //   };
  

// //   return (
// //     <div className="view-appointment">
// //       <h1>Appointments</h1>
// //       {error && <div className="error-message">{error}</div>}
// //       <table className="appointment-table">
// //         <thead>
// //           <tr>
// //             <th>Patient Name</th>
// //             <th>Patient Contact</th>
// //             <th>Problem</th>
// //             <th>Doctor Name</th>
// //             <th>Prescription</th>
// //             <th>Appointment Taken Date</th>
// //             <th>Appointment Date</th>
// //             <th>Appointment Status</th>
// //             <th>Appointment Price</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {appointments.length > 0 ? (
// //             appointments.map(app => (
// //               <tr key={app.id}>
// //                 <td>{app.patientName || 'N/A'}</td>
// //                 <td>{app.patientContact || 'N/A'}</td>
// //                 <td>{app.problem || 'N/A'}</td>
// //                 <td>{app.doctorName || 'N/A'}</td>
// //                 <td>{app.prescription || 'N/A'}</td>
// //                 <td>{app.takenDate ? new Date(app.takenDate).toLocaleDateString() : 'N/A'}</td>
// //                 <td>{app.appointmentDate ? new Date(app.appointmentDate).toLocaleDateString() : 'N/A'}</td>
// //                 <td>{app.status || 'N/A'}</td>
// //                 <td>{app.price || 'N/A'}</td>
// //                 <td>{app.action || 'N/A'}</td>
// //                 <td>
// //                   <button className="cancel-button" onClick={() => cancelAppointment(app.id)}>
// //                     Cancel
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="10">No appointments found.</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default ViewAppointment;
// import React, { useState, useEffect } from 'react';
// import './ViewAppointment.css';

// function ViewAppointment() {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch appointments from the backend
//   useEffect(() => {
//     fetch('http://localhost:8080/api/appointments')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then(data => setAppointments(data))
//       .catch(error => {
//         console.error("Error fetching appointments:", error);
//         setError('There was an issue fetching the appointments. Please try again.');
//       });
//   }, []);

//   // Handle canceling the appointment (updating status only)
//   const cancelAppointment = (appointmentId) => {
//     const appointmentToUpdate = appointments.find(app => app.id === appointmentId);
//     if (!appointmentToUpdate) {
//       alert("Appointment not found.");
//       return;
//     }

//     // Prepare the updated appointment data, only updating the status
//     const updatedAppointment = {
//       ...appointmentToUpdate,
//       appointmentStatus: 'Canceled', // Update the status to 'Canceled'
//     };

//     // Send the update request to the backend
//     fetch(`http://localhost:8080/api/appointments/${appointmentId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedAppointment), // Send the updated appointment data
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update appointment status');
//         }
//         return response.json();
//       })
//       .then(updatedAppointment => {
//         // After successfully updating the backend, update the frontend
//         setAppointments(prevAppointments =>
//           prevAppointments.map(app =>
//             app.id === appointmentId ? { ...app, appointmentStatus: updatedAppointment.appointmentStatus } : app
//           )
//         );
//         alert("Appointment status updated to 'Canceled'.");
//       })
//       .catch(error => {
//         console.error("Error updating appointment status:", error);
//         alert("There was an issue updating the appointment status.");
//       });
//   };

//   // Helper function to format dates or return a fallback value
//   const formatDate = (date) => {
//     if (date) {
//       return new Date(date).toLocaleDateString();
//     }
//     return 'Date not available';
//   };

//   return (
//     <div className="view-appointment">
//       <h1>Appointments</h1>
//       {error && <div className="error-message">{error}</div>}
//       <table className="appointment-table">
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Patient Contact</th>
//             <th>Problem</th>
//             <th>Doctor Name</th>
//             <th>Prescription</th>
//             <th>Appointment Taken Date</th>
//             <th>Appointment Date</th>
//             <th>Appointment Status</th>
//             <th>Appointment Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.length > 0 ? (
//             appointments.map(app => (
//               <tr key={app.id}>
//                 <td>{app.patientName || 'N/A'}</td>
//                 <td>{app.patientContact || 'N/A'}</td>
//                 <td>{app.problem || 'N/A'}</td>
//                 <td>{app.doctorName || 'N/A'}</td>
//                 <td>{app.prescription || 'N/A'}</td>
//                 <td>{formatDate(app.appointmentTakenDate)}</td>  {/* Format appointmentTakenDate */}
//                 <td>{formatDate(app.appointmentDate)}</td>  {/* Format appointmentDate */}
//                 <td>{app.appointmentStatus || 'N/A'}</td> {/* Corrected status field name */}
//                 <td>{app.appointmentPrice || 'N/A'}</td>
//                 <td>
//                   <button className="cancel-button" onClick={() => cancelAppointment(app.id)}>
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="10">No appointments found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewAppointment;











import React, { useState, useEffect } from 'react';
import './ViewAppointment.css';

function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  // Fetch appointments from the backend
  useEffect(() => {
    fetch('http://localhost:8080/api/appointments')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setAppointments(data))
      .catch(error => {
        console.error("Error fetching appointments:", error);
        setError('There was an issue fetching the appointments. Please try again.');
      });
  }, []);

  // Handle canceling the appointment (updating status only)
  const cancelAppointment = (appointmentId) => {
    const appointmentToUpdate = appointments.find(app => app.id === appointmentId);
    if (!appointmentToUpdate) {
      alert("Appointment not found.");
      return;
    }

    // Prepare the updated appointment data, only updating the status
    const updatedAppointment = {
      ...appointmentToUpdate,
      appointmentStatus: 'Canceled', // Update the status to 'Canceled'
    };

    // Send the update request to the backend
    fetch(`http://localhost:8080/api/appointments/${appointmentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAppointment), // Send the updated appointment data
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update appointment status');
        }
        return response.json();
      })
      .then(updatedAppointment => {
        // After successfully updating the backend, update the frontend
        setAppointments(prevAppointments =>
          prevAppointments.map(app =>
            app.id === appointmentId ? { ...app, appointmentStatus: updatedAppointment.appointmentStatus } : app
          )
        );
        alert("Appointment status updated to 'Canceled'.");
      })
      .catch(error => {
        console.error("Error updating appointment status:", error);
        alert("There was an issue updating the appointment status.");
      });
  };

  // Handle prescription download with the updated API link
  const downloadPrescription = (patientId) => {
    // Updated API link for downloading prescription PDF
    const pdfUrl = `http://localhost:8080/api/prescriptions/1/download`;  // Updated endpoint for PDF download

    fetch(pdfUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to download prescription');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a download link for the PDF
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `prescription-${patientId}.pdf`;  // Provide the desired filename
        link.click();
      })
      .catch(error => {
        console.error("Error downloading prescription:", error);
        alert("There was an issue downloading the prescription.");
      });
  };

  // Helper function to format dates or return a fallback value
  const formatDate = (date) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    }
    return 'Date not available';
  };

  return (
    <div className="view-appointment">
      <h1>Appointments</h1>
      {error && <div className="error-message">{error}</div>}
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient Contact</th>
            <th>Problem</th>
            <th>Doctor Name</th>
            <th>Prescription</th>
            <th>Appointment Taken Date</th>
            <th>Appointment Date</th>
            <th>Appointment Status</th>
            <th>Appointment Price</th>
            <th>Action</th>
            <th>Download Prescription</th> {/* New column for Download button */}
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map(app => (
              <tr key={app.id}>
                <td>{app.patientName || 'N/A'}</td>
                <td>{app.patientContact || 'N/A'}</td>
                <td>{app.problem || 'N/A'}</td>
                <td>{app.doctorName || 'N/A'}</td>
                <td>{app.prescription || 'N/A'}</td>
                <td>{formatDate(app.appointmentTakenDate)}</td>
                <td>{formatDate(app.appointmentDate)}</td>
                <td>{app.appointmentStatus || 'N/A'}</td>
                <td>{app.appointmentPrice || 'N/A'}</td>
                <td>
                  <button className="cancel-button" onClick={() => cancelAppointment(app.id)}>
                    Cancel
                  </button>
                </td>
                <td>
                  <button className="download-button" onClick={() => downloadPrescription(app.patientId)}>
                    Download Prescription
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No appointments found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAppointment;


