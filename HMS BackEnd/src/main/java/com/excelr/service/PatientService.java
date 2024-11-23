package com.excelr.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.dto.PatientRepository;
import com.excelr.entity.Patient;

@Service
public class PatientService {

    private static final Logger logger = LoggerFactory.getLogger(PatientService.class);

    @Autowired
    private PatientRepository patientRepository;

    // Get all patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Get patient by ID
    public Optional<Patient> getPatientById(int patientId) {
        return patientRepository.findById(patientId);
    }
    
    // Get patient by email
    public Optional<Patient> getPatientByEmail(String emailId) {
        return patientRepository.findByEmailId(emailId);
    }

    // Save patient
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Delete patient
    public boolean deletePatient(int patientId) {
        if (patientRepository.existsById(patientId)) {
            patientRepository.deleteById(patientId);
            logger.info("Deleted patient with ID: {}", patientId);
            return true;
        } else {
            logger.warn("Attempted to delete non-existent patient with ID: {}", patientId);
            return false;
        }
    }

    // Update patient
    public Patient updatePatient(Patient patient) {
        logger.info("Updating patient with Email ID: {}", patient.getEmailId());
        return patientRepository.save(patient);
    }
}
