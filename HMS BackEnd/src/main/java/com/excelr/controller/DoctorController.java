package com.excelr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.excelr.entity.Doctor;
import com.excelr.service.DoctorService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{doctorId}")
    public Optional<Doctor> getDoctorById(@PathVariable Integer doctorId) {
        return doctorService.getDoctorById(doctorId);
    }
    
    @GetMapping("/email/{emailId}")
    public Optional<Doctor> getDoctorByEmail(@PathVariable String emailId){
    	return doctorService.getDoctorByEmail(emailId);
    }

    @PostMapping("/register")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    @PutMapping("/{doctorId}")
    public Doctor updateDoctor(@PathVariable int doctorId, @RequestBody Doctor doctor) {
        doctor.setDoctorId(doctorId);
        return doctorService.saveDoctor(doctor);
    }

    @DeleteMapping("/{doctorId}")
    public void deleteDoctor(@PathVariable Integer doctorId) {
        doctorService.deleteDoctor(doctorId);
    }
}

