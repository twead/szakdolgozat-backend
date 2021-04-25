package hu.gamf.szakdolgozatbackend.controller;

import java.util.List;

import javax.validation.Valid;

import hu.gamf.szakdolgozatbackend.dto.HolidaysDto;
import hu.gamf.szakdolgozatbackend.dto.InstructionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.dto.AppointmentDto;
import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.entity.Worktime;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.service.AppointmentService;

@RestController
@RequestMapping("/api/appointment")
@CrossOrigin
public class AppointmentController {

	private AppointmentService appointmentService;

	@Autowired
	public AppointmentController(AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}

	// -------------------------PATIENT HASN'T SELECTED PRACTITIONER
	// YET-------------------------

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/schedule-practitioners/{username}")
	public List<User> getAllPractitionerExceptMe(@PathVariable(value = "username") String username) {
		return appointmentService.getAllPractitionerExceptMe(username);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@PutMapping("/update-practitioner/{username}")
	public ResponseEntity updatePractitioner(@PathVariable(value = "username") String username,
			@RequestBody Long practitionerId) {
		appointmentService.updatePractitioner(username, practitionerId);
		return new ResponseEntity(HttpStatus.OK);
	}

	// -------------------------PATIENT HAS ALREADY SELECTED A
	// PRACTITIONER-------------------------

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@PostMapping("/create/{username}")
	public void madeAnAppointment(@PathVariable(value = "username") String username,
			@RequestBody AppointmentDto appointmentDto) {
		appointmentService.createAnAppointmentAndSave(username, appointmentDto);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@DeleteMapping("/delete/{id}")
	public void deleteAnAppointment(@PathVariable(value = "id") Long appointmentId) {
		appointmentService.findAppointmentById(appointmentId).orElseThrow(() -> new ApiRequestException("Az időpont törlése nem sikerült"));
		appointmentService.deleteAppointmentById(appointmentId);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/show/{username}")
	public List<Appointment> showPatientAppointments(@PathVariable(value = "username") String username) {
		return appointmentService.showPatientAppointments(username);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/show-appointments-for-instruction/{username}")
	public List<InstructionDto> showPatientAppointmentsForInstruction(@PathVariable(value = "username") String username) {
		return appointmentService.showPatientAppointmentsForInstruction(username);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/show-others-appointments/{username}")
	public List<Appointment> showOthersAppointments(@PathVariable(value = "username") String username) {
		return appointmentService.showOthersAppointments(username);
	}

	@PreAuthorize("hasRole('ROLE_PRACTITIONER') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/get-business-hours/{username}")
	public List<Worktime> getPractitionerWorkingTime(@PathVariable(value = "username") String username) {
		return appointmentService.getPractitionerWorkingTime(username);
	}

	@PreAuthorize("hasRole('ROLE_PRACTITIONER')")
	@PutMapping("/set-business-hours/{username}")
	public void setPractitionerWorkingTime(@PathVariable(value = "username") String username,
			@Valid @RequestBody @Nullable Worktime[] worktimes) {
		appointmentService.setPractitionerWorkingTime(username, worktimes);
	}

	@PreAuthorize("hasRole('ROLE_PRACTITIONER')")
	@PostMapping("/works-on-holidays/{username}")
	public void holidayWorks(@PathVariable(value = "username") String username,
			@RequestBody HolidaysDto worksOnHoliday){
		appointmentService.setHolidayWorks(username, worksOnHoliday);
	}

	@PreAuthorize("hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/works-on-holidays/{username}")
	public HolidaysDto holidayWorksForWorktimeSettings(@PathVariable(value = "username") String username){
		return appointmentService.getHolidayWorksForWorktimeSettings(username);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/my-practitioner-works-on-holidays/{username}")
	public HolidaysDto setHolidayWorks(@PathVariable(value = "username") String username){
		return appointmentService.getMyPractitionerHolidayWorksSetting(username);
	}

	@PreAuthorize("hasRole('ROLE_PATIENT') or hasRole('ROLE_PRACTITIONER')")
	@GetMapping("/my-practitioner-working-time/{username}")
	public List<Worktime> showPractitionerWorkingTime(@PathVariable(value = "username") String username) {
		return appointmentService.showPractitionerWorkingTime(username);
	}

}
