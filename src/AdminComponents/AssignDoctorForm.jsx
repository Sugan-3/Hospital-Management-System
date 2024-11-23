import React, { useState } from 'react';
import './AssignDoctor.css'

function AssignDoctorForm({ appointment, doctors, onClose, onSubmit }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(appointment.id, selectedDoctor); // Submit the selected doctor
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='adminassignh2'>Assign Doctor to Appointment</h2>
        <form className='adminassignform' onSubmit={handleSubmit}>
          <div>
            <label>Patient Name:</label>
            <p>{appointment.patientName}</p>
          </div>
          <div>
            <label>Problem Description:</label>
            <p>{appointment.problem}</p>
          </div>
          <div>
            <label>Appointment Date:</label>
            <p>{appointment.appointmentDate}</p>
          </div>
          <div>
            <label>Doctor:</label>
            <select className='adminassignselect'
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <button className='adminassignbuttonsubmit' type="submit">Assign Doctor</button>
          <button className='adminassignbuttonbtn' type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AssignDoctorForm;

