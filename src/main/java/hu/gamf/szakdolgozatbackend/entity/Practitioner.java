package hu.gamf.szakdolgozatbackend.entity;

import java.io.Serializable;
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

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "practitioner")
public class Practitioner implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 60)
	private String workingAddress;

	@Column(length = 60)
	private String specialization;
	
	@Column
	private boolean worksOnHolidays;

	@Column(length = 10)
	private String slotMinTime;

	@Column(length = 10)
	private String slotMaxTime;

	@Column(nullable = true)
	private int defaultTimePerClient;
	
	@JsonBackReference("harmadik")
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private User user;
	
	
	@OneToMany(mappedBy="practitioner")
    private List<Worktime> worktimes;
	
	
	@OneToMany(mappedBy="practitioner")
    private List<Appointment> appointments;

	public Practitioner() {
	}

	public Long getId() {
		return id;
	}

	public String getWorkingAddress() {
		return workingAddress;
	}

	public void setWorkingAddress(String workingAddress) {
		this.workingAddress = workingAddress;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public boolean getWorksOnHolidays() {
		return worksOnHolidays;
	}

	public void setWorksOnHolidays(boolean worksOnHolidays) {
		this.worksOnHolidays = worksOnHolidays;
	}

	public String getSlotMinTime() {
		return slotMinTime;
	}

	public void setSlotMinTime(String slotMinTime) {
		this.slotMinTime = slotMinTime;
	}

	public String getSlotMaxTime() {
		return slotMaxTime;
	}

	public void setSlotMaxTime(String slotMaxTime) {
		this.slotMaxTime = slotMaxTime;
	}

	public int getDefaultTimePerClient() {
		return defaultTimePerClient;
	}

	public void setDefaultTimePerClient(int defaultTimePerClient) {
		this.defaultTimePerClient = defaultTimePerClient;
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
