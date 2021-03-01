package hu.gamf.szakdolgozatbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long practitionerId;
	private short year;
	private short month;
	private short day;
	private short hour;
	
	@ManyToOne
    private Patient patient;
	
	public Long getPractitionerId() {
		return practitionerId;
	}
	public void setPractitionerId(Long practitionerId) {
		this.practitionerId = practitionerId;
	}
	public short getYear() {
		return year;
	}
	public void setYear(short year) {
		this.year = year;
	}
	public short getMonth() {
		return month;
	}
	public void setMonth(short month) {
		this.month = month;
	}
	public short getDay() {
		return day;
	}
	public void setDay(short day) {
		this.day = day;
	}
	public short getHour() {
		return hour;
	}
	public void setHour(short hour) {
		this.hour = hour;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
}
