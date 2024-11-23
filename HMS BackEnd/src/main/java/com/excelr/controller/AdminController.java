package com.excelr.controller;

import com.excelr.entity.Admin;
import com.excelr.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{adminId}")
    public Optional<Admin> getAdminById(@PathVariable String adminId) {
        return adminService.getAdminById(adminId);
    }
    
    @GetMapping("/email/{emailId}")
    public Optional<Admin> getAdminByEmail(@PathVariable String emailId){
    	return adminService.getAdminByEmail(emailId);
    }

    @PostMapping("/register")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @PutMapping("/{adminId}")
    public Admin updateAdmin(@PathVariable String adminId, @RequestBody Admin admin) {
        admin.setAdminId(adminId);
        return adminService.saveAdmin(admin);
    }

    @DeleteMapping("/{adminId}")
    public void deleteAdmin(@PathVariable String adminId) {
        adminService.deleteAdmin(adminId);
    }
}
