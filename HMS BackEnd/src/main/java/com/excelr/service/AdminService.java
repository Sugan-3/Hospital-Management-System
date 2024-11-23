package com.excelr.service;

import com.excelr.dto.AdminRepository;
import com.excelr.entity.Admin;
import com.excelr.entity.Doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(String adminId) {
        return adminRepository.findById(adminId);
    }
    
    public Optional<Admin> getAdminByEmail(String emailId){
    	return adminRepository.findByEmailId(emailId);
    }

    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public void deleteAdmin(String adminId) {
        adminRepository.deleteById(adminId);
    }
}
