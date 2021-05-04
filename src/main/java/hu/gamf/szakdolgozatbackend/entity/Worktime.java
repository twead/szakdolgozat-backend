package hu.gamf.szakdolgozatbackend.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "worktime")
public class Worktime {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private short day;
	@Column(length = 5)
	private String fromTime;
	@Column(length = 5)
	private String toTime;

	@JsonBackReference("worktimePractitionerBackReference")
	@ManyToOne
    private Practitioner practitioner;

	public Worktime() {
	}

	public short getDay() {
		return day;
	}

	public void setDay(short day) {
		this.day = day;
	}

	public String getFromTime() {
		return fromTime;
	}

	public void setFromTime(String fromTime) {
		this.fromTime = fromTime;
	}

	public String getToTime() {
		return toTime;
	}

	public void setToTime(String toTime) {
		this.toTime = toTime;
	}

	public Practitioner getPractitioner() {
		return practitioner;
	}

	public void setPractitioner(Practitioner practitioner) {
		this.practitioner = practitioner;
	}

}
