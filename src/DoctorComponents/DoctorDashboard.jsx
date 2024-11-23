// import React, { useState } from "react";
// import "./DoctorDashboard.css";

// const patientData = [
//   { id: 1, name: "John Doe", age: 30, symptoms: "Headache", appointmentTime: "10:00 AM", description: "", fees: "" },
//   { id: 2, name: "Jane Smith", age: 25, symptoms: "Fever", appointmentTime: "11:00 AM", description: "", fees: "" },
//   { id: 3, name: "Alice Johnson", age: 40, symptoms: "Cough", appointmentTime: "12:00 PM", description: "", fees: "" },
// ];

// const Header = () => (
//   <div className="header-container">
//     <div className="logo"></div>
//     <div className="header-title">Doctor Dashboard</div>
//     <button className="logout-button">Logout</button>
//   </div>
// );

// const Footer = () => (
//   <div className="footer-container">
//     <p>©️2024 Doctor Dashboard</p>
//   </div>
// );

// const DoctorDashboard = () => {
//   const [patients, setPatients] = useState(patientData);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const [prescription, setPrescription] = useState({
//     doctorName: "",
//     patientName: "",
//     date: "",
//     medicines: "",
//     instructions: "",
//     diagnosis: "",
//   });

//   const [errors, setErrors] = useState({});

//   const openPatientDetails = (patient) => {
//     setSelectedPatient(patient);
//     setShowModal(true);
//   };

//   const closePatientDetails = () => {
//     setSelectedPatient(null);
//     setShowModal(false);
//     setPrescription({
//       doctorName: "",
//       patientName: "",
//       date: "",
//       medicines: "",
//       instructions: "",
//       diagnosis: "",
//     });
//     setErrors({});
//   };

//   const handlePrescriptionChange = (e) => {
//     const { name, value } = e.target;
//     setPrescription((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validatePrescription = () => {
//     const newErrors = {};
//     if (!prescription.doctorName) newErrors.doctorName = "Doctor name is required.";
//     if (!prescription.patientName) newErrors.patientName = "Patient name is required.";
//     if (!prescription.date) newErrors.date = "Date is required.";
//     if (!prescription.medicines) newErrors.medicines = "Medicines are required.";
//     if (!prescription.instructions) newErrors.instructions = "Instructions are required.";
//     if (!prescription.diagnosis) newErrors.diagnosis = "Diagnosis is required.";
//     return newErrors;
//   };

//   const handleSavePrescription = () => {
//     const validationErrors = validatePrescription();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     alert("Prescription saved successfully!");
//     console.log(prescription); // Save or process this data as needed.
//     closePatientDetails();
//   };

//   const handleCancelAppointment = (patientId) => {
//     const updatedPatients = patients.filter((patient) => patient.id !== patientId);
//     setPatients(updatedPatients);
//     alert("Appointment cancelled successfully!");
//   };

//   return (
//     <div>
//       <Header />
//       <div className="dashboard-container">
//         <div className="section">
//           <h3 className="section-header"><center>Patient Appointments</center></h3>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th className="table-header">Name</th>
//                 <th className="table-header">Age</th>
//                 <th className="table-header">Symptoms</th>
//                 <th className="table-header">Appointment Time</th>
//                 <th className="table-header"><center>Action</center></th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((patient) => (
//                 <tr key={patient.id} className="table-row">
//                   <td className="table-data">{patient.name}</td>
//                   <td className="table-data">{patient.age}</td>
//                   <td className="table-data">{patient.symptoms}</td>
//                   <td className="table-data">{patient.appointmentTime}</td>
//                   <td className="table-data">
//                     <button onClick={() => openPatientDetails(patient)} className="details-button">
//                       Give Prescription
//                     </button>
//                     <button
//                       onClick={() => handleCancelAppointment(patient.id)}
//                       className="cancel-button"
//                     >
//                       Cancel Appointment
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {showModal && selectedPatient && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <h3 className="modal-header">Patient Details</h3>
//               <p><strong>Name:</strong> {selectedPatient.name}</p>
//               <p><strong>Age:</strong> {selectedPatient.age}</p>
//               <p><strong>Symptoms:</strong> {selectedPatient.symptoms}</p>
//               <p><strong>Appointment Time:</strong> {selectedPatient.appointmentTime}</p>

//               <h4 className="sub-header">Prescription</h4>
//               <div className="scrollable-form">
//                 <form>
//                   <div className="form-group">
//                     <label>Doctor Name:</label>
//                     <input
//                       type="text"
//                       name="doctorName"
//                       value={prescription.doctorName}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.doctorName && <p className="error-text">{errors.doctorName}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Patient Name:</label>
//                     <input
//                       type="text"
//                       name="patientName"
//                       value={prescription.patientName || selectedPatient.name}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.patientName && <p className="error-text">{errors.patientName}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Date:</label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={prescription.date}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.date && <p className="error-text">{errors.date}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Medicines:</label>
//                     <textarea
//                       name="medicines"
//                       value={prescription.medicines}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.medicines && <p className="error-text">{errors.medicines}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Instructions:</label>
//                     <textarea
//                       name="instructions"
//                       value={prescription.instructions}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.instructions && <p className="error-text">{errors.instructions}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Diagnosis:</label>
//                     <textarea
//                       name="diagnosis"
//                       value={prescription.diagnosis}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.diagnosis && <p className="error-text">{errors.diagnosis}</p>}
//                   </div>
//                   <button type="button" onClick={handleSavePrescription} className="update-button">
//                     Save Prescription
//                   </button>
//                   <button type="button" onClick={closePatientDetails} className="close-button">
//                     Close
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorDashboard;


// import React, { useState, useEffect } from "react";
// import "./DoctorDashboard.css";

// const Header = () => (
//   <div className="header-container">
//     <div className="logo"></div>
//     <div className="header-title">Doctor Dashboard</div>
//     <button className="logout-button">Logout</button>
//   </div>
// );

// const Footer = () => (
//   <div className="footer-container">
//     <p>©️2024 Doctor Dashboard</p>
//   </div>
// );

// const DoctorDashboard = () => {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const [prescription, setPrescription] = useState({
//     doctorName: "",
//     patientName: "",
//     date: "",
//     medicines: "",
//     instructions: "",
//     diagnosis: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/appointments");
//         const data = await response.json();

//         // Transform the data to match frontend structure
//         const transformedData = data.map((item) => ({
//           id: item.id,
//           name: item.patientName,
//           age: 30, // Age not available in API; add a placeholder
//           symptoms: item.problem,
//           appointmentTime: new Date(item.appointmentDate).toLocaleDateString(),
//           description: item.prescription,
//           fees: item.appointmentPrice,
//           status: item.appointmentStatus, // Fetching Appointment Status
//         }));

//         setPatients(transformedData);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const openPatientDetails = (patient) => {
//     setSelectedPatient(patient);
//     setShowModal(true);
//   };

//   const closePatientDetails = () => {
//     setSelectedPatient(null);
//     setShowModal(false);
//     setPrescription({
//       doctorName: "",
//       patientName: "",
//       date: "",
//       medicines: "",
//       instructions: "",
//       diagnosis: "",
//     });
//     setErrors({});
//   };

//   const handlePrescriptionChange = (e) => {
//     const { name, value } = e.target;
//     setPrescription((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validatePrescription = () => {
//     const newErrors = {};
//     if (!prescription.doctorName) newErrors.doctorName = "Doctor name is required.";
//     if (!prescription.patientName) newErrors.patientName = "Patient name is required.";
//     if (!prescription.date) newErrors.date = "Date is required.";
//     if (!prescription.medicines) newErrors.medicines = "Medicines are required.";
//     if (!prescription.instructions) newErrors.instructions = "Instructions are required.";
//     if (!prescription.diagnosis) newErrors.diagnosis = "Diagnosis is required.";
//     return newErrors;
//   };

//   const handleSavePrescription = () => {
//     const validationErrors = validatePrescription();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     alert("Prescription saved successfully!");
//     console.log(prescription); // Save or process this data as needed.
//     closePatientDetails();
//   };

//   const handleCancelAppointment = (patientId) => {
//     const updatedPatients = patients.filter((patient) => patient.id !== patientId);
//     setPatients(updatedPatients);
//     alert("Appointment cancelled successfully!");
//   };

//   return (
//     <div>
//       <Header />
//       <div className="dashboard-container">
//         <div className="section">
//           <h3 className="section-header"><center>Patient Appointments</center></h3>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th className="table-header">Name</th>
//                 <th className="table-header">Age</th>
//                 <th className="table-header">Symptoms</th>
//                 <th className="table-header">Appointment Time</th>
//                 <th className="table-header">Appointment Status</th>
//                 <th className="table-header"><center>Action</center></th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((patient) => (
//                 <tr key={patient.id} className="table-row">
//                   <td className="table-data">{patient.name}</td>
//                   <td className="table-data">{patient.age}</td>
//                   <td className="table-data">{patient.symptoms}</td>
//                   <td className="table-data">{patient.appointmentTime}</td>
//                   <td className="table-data">{patient.status}</td>
//                   <td className="table-data">
//                     <button onClick={() => openPatientDetails(patient)} className="details-button">
//                       Give Prescription
//                     </button>
//                     <button
//                       onClick={() => handleCancelAppointment(patient.id)}
//                       className="cancel-button"
//                     >
//                       Cancel Appointment
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {showModal && selectedPatient && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <h3 className="modal-header">Patient Details</h3>
//               <p><strong>Name:</strong> {selectedPatient.name}</p>
//               <p><strong>Age:</strong> {selectedPatient.age}</p>
//               <p><strong>Symptoms:</strong> {selectedPatient.symptoms}</p>
//               <p><strong>Appointment Time:</strong> {selectedPatient.appointmentTime}</p>
//               <p><strong>Appointment Status:</strong> {selectedPatient.status}</p>

//               <h4 className="sub-header">Prescription</h4>
//               <div className="scrollable-form">
//                 <form>
//                   <div className="form-group">
//                     <label>Doctor Name:</label>
//                     <input
//                       type="text"
//                       name="doctorName"
//                       value={prescription.doctorName}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.doctorName && <p className="error-text">{errors.doctorName}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Patient Name:</label>
//                     <input
//                       type="text"
//                       name="patientName"
//                       value={prescription.patientName || selectedPatient.name}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.patientName && <p className="error-text">{errors.patientName}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Date:</label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={prescription.date}
//                       onChange={handlePrescriptionChange}
//                       className="input"
//                     />
//                     {errors.date && <p className="error-text">{errors.date}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Medicines:</label>
//                     <textarea
//                       name="medicines"
//                       value={prescription.medicines}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.medicines && <p className="error-text">{errors.medicines}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Instructions:</label>
//                     <textarea
//                       name="instructions"
//                       value={prescription.instructions}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.instructions && <p className="error-text">{errors.instructions}</p>}
//                   </div>
//                   <div className="form-group">
//                     <label>Diagnosis:</label>
//                     <textarea
//                       name="diagnosis"
//                       value={prescription.diagnosis}
//                       onChange={handlePrescriptionChange}
//                       className="textarea"
//                     ></textarea>
//                     {errors.diagnosis && <p className="error-text">{errors.diagnosis}</p>}
//                   </div>
//                   <button type="button" onClick={handleSavePrescription} className="update-button">
//                     Save Prescription
//                   </button>
//                   <button type="button" onClick={closePatientDetails} className="close-button">
//                     Close
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorDashboard;

import React, { useState, useEffect } from "react";
import "./DoctorDashboard.css";

const Header = () => (
  <div className="header-container">
    <div className="logo"></div>
    <div className="header-title">Doctor Dashboard</div>
    <button className="logout-button">Logout</button>
  </div>
);

const Footer = () => (
  <div className="footer-container">
    <p>©️2024 Doctor Dashboard</p>
  </div>
);

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [appoi,setAppoi]=useState([]);

  const [prescription, setPrescription] = useState({
    doctorName: "",
    patientName: "",
    date: "",
    medicines: "",
    instructions: "",
    diagnosis: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch data from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/appointments");
        const data = await response.json();

        // Transform the data to match frontend structure
        const transformedData = data.map((item) => ({
          setAppoi:item,
          id: item.id,
          name: item.patientName,
          age: 30, // Age not available in API; add a placeholder
          symptoms: item.problem,
          appointmentTime: new Date(item.appointmentDate).toLocaleDateString(),
          description: item.prescription,
          fees: item.appointmentPrice,
          status: item.appointmentStatus, // Fetching Appointment Status
        }));

        setPatients(transformedData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const openPatientDetails = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const closePatientDetails = () => {
    setSelectedPatient(null);
    setShowModal(false);
    setPrescription({
      doctorName: "",
      patientName: "",
      date: "",
      medicines: "",
      instructions: "",
      diagnosis: "",
    });
    setErrors({});
  };

  const handlePrescriptionChange = (e) => {
    const { name, value } = e.target;
    setPrescription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePrescription = () => {
    const newErrors = {};
    if (!prescription.doctorName) newErrors.doctorName = "Doctor name is required.";
    if (!prescription.patientName) newErrors.patientName = "Patient name is required.";
    if (!prescription.date) newErrors.date = "Date is required.";
    if (!prescription.medicines) newErrors.medicines = "Medicines are required.";
    if (!prescription.instructions) newErrors.instructions = "Instructions are required.";
    if (!prescription.diagnosis) newErrors.diagnosis = "Diagnosis is required.";
    return newErrors;
  };

  const handleSavePrescription = async () => {
    const validationErrors = validatePrescription();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      // Prepare prescription data for the API request
      const payload = {
        doctorName: prescription.doctorName,
        patientName: prescription.patientName || selectedPatient.name,
        date: prescription.date,
        diagnosis: prescription.diagnosis,
        medicines: prescription.medicines,
        instructions: prescription.instructions,
      };
  
      // Send POST request to the backend API
      const response = await fetch("http://localhost:8080/api/prescriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to save prescription. Server responded with status: ${response.status}`);
      }
  
      alert("Prescription saved successfully!");
      closePatientDetails();
    } catch (error) {
      console.error("Error saving prescription:", error);
      alert("Failed to save the prescription. Please try again.");
    }
  };
  
  const handleCancelAppointment = async (appointmentId) => {
    try {
      // // Find the appointment to get the existing details
      const appointmentToCancel = patients.find(patient => patient.id === appointmentId);
  
      // if (!appointmentToCancel) {
      //   alert("Appointment not found!");
      //   return;
      // }
  
      // Create a new object that contains the existing data with updated status
      const updatedAppointment = {
        ...appointmentToCancel, // Copy the current data
        status: "Cancelled",   // Update the status
      };
  
      // Send a PUT request to update the appointment status to "Cancelled"
      const response = await fetch(`http://localhost:8080/api/appointments/${appointmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAppointment), // Send the entire updated object
      });
  
      // Check if the response was successful
      if (!response.ok) {
        throw new Error(`Failed to cancel the appointment. Server responded with status: ${response.status}`);
      }
  
      // Update the frontend state after a successful backend update
      const updatedPatients = patients.map((patient) =>
        patient.id === appointmentId ? updatedAppointment : patient
      );
      setPatients(updatedPatients);
  
      alert("Appointment cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      alert("Failed to cancel the appointment. Please try again.");
    }
  };
  
  
  

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="section">
          <h3 className="section-header"><center>Patient Appointments</center></h3>
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Age</th>
                <th className="table-header">Symptoms</th>
                <th className="table-header">Appointment Time</th>
                <th className="table-header">Appointment Status</th>
                <th className="table-header"><center>Action</center></th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="table-row">
                  <td className="table-data">{patient.name}</td>
                  <td className="table-data">{patient.age}</td>
                  <td className="table-data">{patient.symptoms}</td>
                  <td className="table-data">{patient.appointmentTime}</td>
                  <td className="table-data">{patient.status}</td>
                  <td className="table-data">
                    <button
                      onClick={() => openPatientDetails(patient)}
                      className="details-button"
                    >
                      Give Prescription
                    </button>
                    <button
                      onClick={() => handleCancelAppointment(patient.id)}
                      className="cancel-button"
                      disabled={patient.status === "Cancelled"}
                    >
                      {patient.status === "Cancelled" ? "Cancelled" : "Cancel Appointment"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && selectedPatient && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-header">Patient Details</h3>
              <p><strong>Name:</strong> {selectedPatient.name}</p>
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Symptoms:</strong> {selectedPatient.symptoms}</p>
              <p><strong>Appointment Time:</strong> {selectedPatient.appointmentTime}</p>
              <p><strong>Appointment Status:</strong> {selectedPatient.status}</p>

              <h4 className="sub-header">Prescription</h4>
              <div className="scrollable-form">
                <form>
                  <div className="form-group">
                    <label>Doctor Name:</label>
                    <input
                      type="text"
                      name="doctorName"
                      value={prescription.doctorName}
                      onChange={handlePrescriptionChange}
                      className="input"
                    />
                    {errors.doctorName && <p className="error-text">{errors.doctorName}</p>}
                  </div>
                  <div className="form-group">
                    <label>Patient Name:</label>
                    <input
                      type="text"
                      name="patientName"
                      value={prescription.patientName || selectedPatient.name}
                      onChange={handlePrescriptionChange}
                      className="input"
                    />
                    {errors.patientName && <p className="error-text">{errors.patientName}</p>}
                  </div>
                  <div className="form-group">
                    <label>Date:</label>
                    <input
                      type="date"
                      name="date"
                      value={prescription.date}
                      onChange={handlePrescriptionChange}
                      className="input"
                    />
                    {errors.date && <p className="error-text">{errors.date}</p>}
                  </div>
                  <div className="form-group">
                    <label>Medicines:</label>
                    <textarea
                      name="medicines"
                      value={prescription.medicines}
                      onChange={handlePrescriptionChange}
                      className="textarea"
                    ></textarea>
                    {errors.medicines && <p className="error-text">{errors.medicines}</p>}
                  </div>
                  <div className="form-group">
                    <label>Instructions:</label>
                    <textarea
                      name="instructions"
                      value={prescription.instructions}
                      onChange={handlePrescriptionChange}
                      className="textarea"
                    ></textarea>
                    {errors.instructions && <p className="error-text">{errors.instructions}</p>}
                  </div>
                  <div className="form-group">
                    <label>Diagnosis:</label>
                    <textarea
                      name="diagnosis"
                      value={prescription.diagnosis}
                      onChange={handlePrescriptionChange}
                      className="textarea"
                    ></textarea>
                    {errors.diagnosis && <p className="error-text">{errors.diagnosis}</p>}
                  </div>
                  <button type="button" onClick={handleSavePrescription} className="update-button">
                    Save Prescription
                  </button>
                  <button type="button" onClick={closePatientDetails} className="close-button">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;