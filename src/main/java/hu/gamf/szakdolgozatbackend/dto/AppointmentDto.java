package hu.gamf.szakdolgozatbackend.dto;

import javax.validation.constraints.NotBlank;

public class AppointmentDto {
	
	@NotBlank
	private String message;
	@NotBlank
	private String time;
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
}
