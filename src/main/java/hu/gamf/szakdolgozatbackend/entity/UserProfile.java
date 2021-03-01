package hu.gamf.szakdolgozatbackend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@MappedSuperclass
public abstract class UserProfile{
	
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
	
	
	public UserProfile() {
	}

	public UserProfile(String name, String email, String address, Date dateOfBorn) {
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
		
}
