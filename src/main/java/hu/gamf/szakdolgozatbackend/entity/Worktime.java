package hu.gamf.szakdolgozatbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "worktime")
public class Worktime {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private short day;
	private short fromTime;
	private short toTime;
	
	@ManyToOne
    private Practitioner practitioner;

	public short getDay() {
		return day;
	}

	public void setDay(short day) {
		this.day = day;
	}

	public short getFromTime() {
		return fromTime;
	}

	public void setFromTime(short from) {
		this.fromTime = from;
	}

	public short getToTime() {
		return toTime;
	}

	public void setToTime(short to) {
		this.toTime = to;
	}

	public Practitioner getPractitioner() {
		return practitioner;
	}

	public void setPractitioner(Practitioner practitioner) {
		this.practitioner = practitioner;
	}

}
