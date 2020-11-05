package hu.gamf.szakdolgozatbackend.security.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
public class UserProfile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String picture;	
	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private Date dateOfBorn;
	private String address;	
	private String idCard;
	//Social Security Number
	private String socSecNum;
	
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
	
}
