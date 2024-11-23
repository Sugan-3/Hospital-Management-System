package com.excelr.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String patientName;

    @Column(nullable = false)
    private String patientContact;

    @Column(nullable = false)
    private String problem;

    @Column(nullable = false)
    private String doctorName;

    @Column(nullable = false)
    private String prescription;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date appointmentTakenDate;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date appointmentDate;

    @Column(nullable = false)
    private String appointmentStatus;

    @Column(nullable = false)
    private Double appointmentPrice;

    @Column(nullable = false)
    private String action;

    // Getter and setter methods

    public Date getAppointmentTakenDate() {
        return appointmentTakenDate;
    }

    public void setAppointmentTakenDate(Date appointmentTakenDate) {
        this.appointmentTakenDate = appointmentTakenDate;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientContact() {
		return patientContact;
	}

	public void setPatientContact(String patientContact) {
		this.patientContact = patientContact;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(String appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}

	public Double getAppointmentPrice() {
		return appointmentPrice;
	}

	public void setAppointmentPrice(Double appointmentPrice) {
		this.appointmentPrice = appointmentPrice;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}
}