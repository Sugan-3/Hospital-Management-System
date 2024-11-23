

// import React, { useState } from 'react';
// import './TakeAppointment.css'; // Corrected import path

// function TakeAppointment() {
//   const [problem, setProblem] = useState('');
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [notification, setNotification] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleBookAppointment = () => {
//     const validationErrors = {};

//     // Validate the Problem field
//     if (!problem.trim()) {
//       validationErrors.problem = "Please describe your problem.";
//     }

//     // Validate the Appointment Date field
//     if (!appointmentDate) {
//       validationErrors.appointmentDate = "Please select an appointment date.";
//     }

//     // Check if there are any validation errors
//     if (Object.keys(validationErrors).length === 0) {
//       // No errors, proceed with booking the appointment
//       setNotification("Appointment Booked");
//       setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
//       setProblem('');
//       setAppointmentDate('');
//       setErrors({});
//     } else {
//       // Set errors to show them in the UI
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="take-appointment-container">
//       <h2>Book Appointment</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>
//           Problem:
//           <textarea
//             value={problem}
//             onChange={(e) => setProblem(e.target.value)}
//             placeholder="Describe your problem here..."
//             required
//           />
//           {errors.problem && <span className="error-message">{errors.problem}</span>}
//         </label>
        
//         <label>
//           Appointment Date:
//           <input
//             type="date"
//             value={appointmentDate}
//             onChange={(e) => setAppointmentDate(e.target.value)}
//             required
//           />
//           {errors.appointmentDate && <span className="error-message">{errors.appointmentDate}</span>}
//         </label>
        
//         <button type="button" onClick={handleBookAppointment}>Book Appointment</button>
//       </form>
//       {notification && <div className="notification">{notification}</div>}
//     </div>
//   );
// }

// export default TakeAppointment;

import React, { useState, useEffect } from 'react';
import './TakeAppointment.css'; // Corrected import path

function TakeAppointment() {
  const patientDatas = location.state?.patientData || {};
  const patientId=patientDatas.patientId;
 // Assuming patientId is passed from the dashboard
  
  const [problem, setProblem] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [notification, setNotification] = useState('');
  const [errors, setErrors] = useState({});
  const [patient, setPatient] = useState(null); // State to store patient data
  const [doctorName, setDoctorName] = useState("Dr. John Smith"); // Example doctor name
  const [prescription, setPrescription] = useState(""); // Placeholder for prescription

  console.log(patientDatas.patientId);
  // Fetch patient data using the patientId
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/patients/${patientId}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  // Handle appointment booking
  const handleBookAppointment = async () => {
    const validationErrors = {};

    // Validate the Problem field
    if (!problem.trim()) {
      validationErrors.problem = "Please describe your problem.";
    }

    // Validate the Appointment Date field
    if (!appointmentDate) {
      validationErrors.appointmentDate = "Please select an appointment date.";
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      if (patient) {
        // Prepare appointment data
        const appointmentData = {
          patientName: `${patient.firstName} ${patient.lastName}`,  // Patient's full name
          patientContact: patient.mobileNumber,  // Patient's contact number
          problem: problem,  // The problem the patient is facing
          doctorName: doctorName,  // The doctor name (this can be dynamic based on logged-in doctor)
          prescription: prescription,  // Prescription (if applicable)
          appointmentTakenDate: new Date().toISOString(),  // Current date
          appointmentDate: appointmentDate,  // The date selected for the appointment
          appointmentStatus: 'Scheduled',  // Initial status
          appointmentPrice: 100,  // Example appointment price (can be dynamic)
        };

        try {
          const response = await fetch('http://localhost:8080/api/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
          });

          if (response.ok) {
            setNotification("Appointment Booked Successfully");
            setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
            setProblem('');
            setAppointmentDate('');
            setErrors({});
          } else {
            throw new Error('Failed to book appointment');
          }
        } catch (error) {
          console.error('Error booking appointment:', error);
          setNotification("Failed to book appointment. Please try again.");
          setTimeout(() => setNotification(''), 3000);
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="take-appointment-container">
      <h2>Book Appointment</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Problem:
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe your problem here..."
            required
          />
          {errors.problem && <span className="error-message">{errors.problem}</span>}
        </label>

        <label>
          Appointment Date:
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
          {errors.appointmentDate && <span className="error-message">{errors.appointmentDate}</span>}
        </label>

        <button type="button" onClick={handleBookAppointment}>Book Appointment</button>
      </form>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default TakeAppointment;
