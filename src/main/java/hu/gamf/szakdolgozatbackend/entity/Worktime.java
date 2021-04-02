package hu.gamf.szakdolgozatbackend.entity;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.lang.Nullable;

@Entity
@Table(name = "worktime")
public class Worktime implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private short day;
	private String fromTime;
	private String toTime;
	
	@JsonBackReference("otodik")
	@ManyToOne
    private Practitioner practitioner;

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
