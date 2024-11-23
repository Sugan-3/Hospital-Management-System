package com.excelr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.Appointment;
import com.excelr.dto.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Create a new appointment
    public Appointment createAppointment(Appointment appointment) {
        appointment.setAppointmentTakenDate(new java.util.Date()); // Set the current date and time
        return appointmentRepository.save(appointment);
    }

    // Get all appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // Get appointment by ID
    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    // Update an existing appointment
    public Appointment updateAppointment(Long id, Appointment appointmentDetails) {
        Appointment existingAppointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found for this id :: " + id));

        existingAppointment.setPatientName(appointmentDetails.getPatientName());
        existingAppointment.setPatientContact(appointmentDetails.getPatientContact());
        existingAppointment.setProblem(appointmentDetails.getProblem());
        existingAppointment.setDoctorName(appointmentDetails.getDoctorName());
        existingAppointment.setPrescription(appointmentDetails.getPrescription());
        existingAppointment.setAppointmentDate(appointmentDetails.getAppointmentDate());
        existingAppointment.setAppointmentStatus(appointmentDetails.getAppointmentStatus());
        existingAppointment.setAppointmentPrice(appointmentDetails.getAppointmentPrice());
        existingAppointment.setAction(appointmentDetails.getAction());

        return appointmentRepository.save(existingAppointment);
    }

    // Delete an appointment
    public void deleteAppointment(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found for this id :: " + id));
        appointmentRepository.delete(appointment);
    }
}