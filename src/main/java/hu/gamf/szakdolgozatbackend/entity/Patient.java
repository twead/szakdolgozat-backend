package hu.gamf.szakdolgozatbackend.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "patient")
public class Patient implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(length = 40)
	private String name;
	@NotNull
	@Column(unique = true, length = 40)
	private String email;
	@NotNull
	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private Date dateOfBorn;
	@NotNull
	@Column(length = 60)
	private String address;
	private String picture;
	private Long practitionerId;
	
	@JsonBackReference("elso")
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private User user;

	@JsonBackReference("masodik")
	@OneToMany(mappedBy="patient")
    private List<Appointment> appointments;
	
	public Patient() {
	}
	
	public Patient(String name, String email, String address, Date dateOfBorn) {
		this.name = name;
		this.email = email;
		this.address = address;
		this.dateOfBorn = dateOfBorn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDateOfBorn() {
		return dateOfBorn;
	}

	public void setDateOfBorn(Date dateOfBorn) {
		this.dateOfBorn = dateOfBorn;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public Long getPractitionerId() {
		return practitionerId;
	}

	public void setPractitionerId(Long practitionerId) {
		this.practitionerId = practitionerId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}
	
}
