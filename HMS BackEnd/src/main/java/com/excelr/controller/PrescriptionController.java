package com.excelr.controller;

import com.excelr.entity.Prescription;
import com.excelr.service.PrescriptionService;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping
    public ResponseEntity<Prescription> createPrescription(@RequestBody Prescription prescription) {
        prescription.setDate(LocalDate.now());
        Prescription savedPrescription = prescriptionService.savePrescription(prescription);
        return ResponseEntity.ok(savedPrescription);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadPrescription(@PathVariable Long id) {
        Optional<Prescription> optionalPrescription = prescriptionService.getPrescriptionById(id);

        if (optionalPrescription.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Prescription prescription = optionalPrescription.get();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        try (PdfWriter writer = new PdfWriter(outputStream);
             PdfDocument pdfDoc = new PdfDocument(writer);
             Document document = new Document(pdfDoc)) {

            document.add(new Paragraph("Prescription"));
            document.add(new Paragraph("Doctor Name: " + prescription.getDoctorName()));
            document.add(new Paragraph("Patient Name: " + prescription.getPatientId()));
            document.add(new Paragraph("Date: " + prescription.getDate()));
            document.add(new Paragraph("Diagnosis: " + prescription.getDiagnosis()));
            document.add(new Paragraph("Medicines: " + prescription.getMedicines()));
            document.add(new Paragraph("Instructions: " + prescription.getInstructions()));

        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=prescription_" + id + ".pdf");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(org.springframework.http.MediaType.APPLICATION_PDF)
                .body(outputStream.toByteArray());
    }
}
