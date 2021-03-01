package hu.gamf.szakdolgozatbackend.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import hu.gamf.szakdolgozatbackend.security.entity.User;

@Entity
@Table(name = "practitioner")
public class Practitioner extends UserProfile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonBackReference
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private User user;
	
	@OneToMany(mappedBy="practitioner")
    private List<Worktime> worktimes;

	public Practitioner() {
		super();
	}
	
	public Practitioner(String name, String email, String address, Date dateOfBorn) {
		super(name,email,address,dateOfBorn);
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Worktime> getWorktimes() {
		return worktimes;
	}

	public void setWorktimes(List<Worktime> worktimes) {
		this.worktimes = worktimes;
	}
	
}
