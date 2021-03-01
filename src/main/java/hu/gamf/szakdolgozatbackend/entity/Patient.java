package hu.gamf.szakdolgozatbackend.entity;

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

import hu.gamf.szakdolgozatbackend.security.entity.User;

@Entity
@Table(name = "patient")
public class Patient extends UserProfile{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(unique = true, length = 8)
	private String idCard;
	//Social Security Number
	@NotNull
	@Column(unique = true, length = 9)
	private String socSecNum;
	private Long practitionerId;
	
	@JsonBackReference
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private User user;

	@OneToMany(mappedBy="patient")
    private List<Appointment> appointments;
	
	public Patient() {
		super();
	}
	
	public Patient(String name, String email, String address, Date dateOfBorn, 
			String idCard, String socSecNum) {
		super(name,email,address,dateOfBorn);
		this.socSecNum = socSecNum;
		this.idCard = idCard;
	}

	public String getIdCard() {
		return idCard;
	}

	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	public String getSocSecNum() {
		return socSecNum;
	}

	public void setSocSecNum(String socSecNum) {
		this.socSecNum = socSecNum;
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
