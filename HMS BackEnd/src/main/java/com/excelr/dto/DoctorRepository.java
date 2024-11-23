package com.excelr.dto;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    // Custom query methods (if needed)
	
	Optional<Doctor> findByEmailId(String emailId);
}

