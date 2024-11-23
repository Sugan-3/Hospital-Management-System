package com.excelr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.excelr.entity.Patient;
import com.excelr.service.PatientService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Get all patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // Get patient by ID
    @GetMapping("/{patientId}")
    public ResponseEntity<Patient> getPatientById(@PathVariable int patientId) {
        Optional<Patient> patient = patientService.getPatientById(patientId);
        return patient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get patient by Email ID
    @GetMapping("/email/{emailId}")
    public ResponseEntity<Patient> getPatientByEmail(@PathVariable String emailId) {
        Optional<Patient> patient = patientService.getPatientByEmail(emailId);
        return patient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new patient
    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        Patient createdPatient = patientService.savePatient(patient);
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }

    // Update patient details
    @PutMapping("/{patientId}")
    public ResponseEntity<Patient> updatePatient(@PathVariable int patientId, @RequestBody Patient patient) {
        Optional<Patient> existingPatientOptional = patientService.getPatientById(patientId);
        if (existingPatientOptional.isPresent()) {
            Patient existingPatient = existingPatientOptional.get();

            // Update fields in the existing patient object
            existingPatient.setFirstName(patient.getFirstName());
            existingPatient.setLastName(patient.getLastName());
            existingPatient.setEmailId(patient.getEmailId());
            existingPatient.setPassword(patient.getPassword());
            existingPatient.setGender(patient.getGender());
            existingPatient.setDateOfBirth(patient.getDateOfBirth());
            existingPatient.setMobileNumber(patient.getMobileNumber());
            existingPatient.setStreet(patient.getStreet());
            existingPatient.setCity(patient.getCity());
            existingPatient.setState(patient.getState());
            existingPatient.setZipCode(patient.getZipCode());
            existingPatient.setAadharNumber(patient.getAadharNumber());

            // Save the updated patient back to the database
            Patient updatedPatient = patientService.updatePatient(existingPatient);
            return ResponseEntity.ok(updatedPatient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a patient
    @DeleteMapping("/{patientId}")
    public ResponseEntity<Void> deletePatient(@PathVariable int patientId) {
        if (patientService.deletePatient(patientId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
