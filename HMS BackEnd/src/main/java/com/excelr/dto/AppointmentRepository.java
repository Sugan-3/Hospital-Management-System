package com.excelr.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}