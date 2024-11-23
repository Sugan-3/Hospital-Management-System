package com.excelr.dto;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
    // Custom query method to find a patient by emailId
    Optional<Patient> findByEmailId(String emailId);

}
