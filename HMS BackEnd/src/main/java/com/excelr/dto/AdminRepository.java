package com.excelr.dto;
import com.excelr.entity.Admin;
import com.excelr.entity.Doctor;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
    // Additional custom query methods (if needed)
	Optional<Admin> findByEmailId(String emailId);
}
