package hu.gamf.szakdolgozatbackend.entity;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "appointment")
public class Appointment implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String time;
	private String message;

	@JsonBackReference("masodik")
	@ManyToOne
	private Patient patient;

	@JsonBackReference("negyedik")
	@ManyToOne
	private Practitioner practitioner;

	public Long getId() {
		return id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Practitioner getPractitioner() {
		return practitioner;
	}

	public void setPractitioner(Practitioner practitioner) {
		this.practitioner = practitioner;
	}

}
