package hu.gamf.szakdolgozatbackend.security.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "user_profile")
public class UserProfile{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String picture;	
	@NotNull
	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private Date dateOfBorn;
	@NotNull
	@Column(length = 60)
	private String address;
	@NotNull
	@Column(unique = true, length = 8)
	private String idCard;
	//Social Security Number
	@NotNull
	@Column(unique = true, length = 9)
	private String socSecNum;
	@Column(length = 16)
	private String activation;
	private boolean isEnabled = false;
	private Long practitionerId;
	
	
	@JsonBackReference
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userProfile")
	private User user;
	
	
	public UserProfile() {
	}

	public UserProfile(String address, String idCard, String socSecNum, Date dateOfBorn) {
		this.address = address;
		this.idCard = idCard;
		this.socSecNum = socSecNum;
		this.dateOfBorn = dateOfBorn;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
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

	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	public String getActivation() {
		return activation;
	}

	public void setActivation(String activation) {
		this.activation = activation;
	}

	public boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

	public Long getPractitionerId() {
		return practitionerId;
	}

	public void setPractitionerId(Long practitionerId) {
		this.practitionerId = practitionerId;
	}
		
}
