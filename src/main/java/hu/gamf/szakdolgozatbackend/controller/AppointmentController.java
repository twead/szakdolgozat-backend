package hu.gamf.szakdolgozatbackend.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import hu.gamf.szakdolgozatbackend.entity.Patient;
import hu.gamf.szakdolgozatbackend.entity.Practitioner;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.entity.Worktime;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.service.AppointmentService;
import hu.gamf.szakdolgozatbackend.service.PatientService;
import hu.gamf.szakdolgozatbackend.service.PractitionerService;
import hu.gamf.szakdolgozatbackend.service.WorktimeService;

@RestController
@PreAuthorize("hasAnyRole('ROLE_PRACTITIONER','ROLE_PATIENT')")
@RequestMapping("/api/appointment")
@CrossOrigin
public class AppointmentController {
	
	private AppointmentService appointmentService;
	private WorktimeService worktimeService;
	private PractitionerService practitionerService;
	private PatientService patientService;
	
	@Autowired
	public AppointmentController(AppointmentService appointmentService, WorktimeService worktimeService,
			PractitionerService practitionerService, PatientService patientService) {
		this.appointmentService = appointmentService;
		this.worktimeService = worktimeService;
		this.practitionerService = practitionerService;
		this.patientService = patientService;
	}
	
	//-------------------------PATIENT HASN'T SELECTED PRACTITIONER YET-------------------------

	@GetMapping("/schedule-practitioners/{username}")
	public List<User> getAllPractitionerExceptMe(@PathVariable(value = "username") String username) {
		User user = practitionerService.findUserByUsername(username).get();
		List<User> practitionerList = practitionerService.findAllPractitionerExceptMe(username);
		return practitionerList;
	}
	
	@PutMapping("/update-practitioner/{username}")
	public ResponseEntity updatePractitioner(@PathVariable(value = "username") String username,
			@Valid @RequestBody Long practitionerId) {
		User user = practitionerService.findUserByUsername(username).get();
		user.getPatient().setPractitionerId(practitionerId);
		practitionerService.saveUser(user);

		return new ResponseEntity(HttpStatus.OK);
	}
	
	//-------------------------PATIENT HAS ALREADY SELECTED A PRACTITIONER-------------------------

	@PostMapping("/create/{username}")
	public void MadeAnAppointment(@PathVariable(value = "username") String username,
			@RequestBody AppointmentDto appointmentDto) {
		
		User user = patientService.findUserByUsername(username).orElseThrow(
					() -> new ApiRequestException("Nem található felhasználó")
				);
		
		Appointment appointment = new Appointment();
		appointment.setPatient(user.getPatient());
		//User user2 = patientService.findUserById(user.getPatient().getPractitionerId()).get();
		Practitioner practitioner = 
				practitionerService.findPractitionerById(user.getPatient().getPractitionerId()).get();
		appointment.setPractitioner(practitioner);

		appointment.setMessage(appointmentDto.getMessage());
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(appointmentDto.getTime());
//		LocalDateTime newDate = LocalDateTime.parse(appointmentDto.getMessage(),formatter);
		
		appointment.setTime(appointmentDto.getTime());
		appointmentService.saveAppointment(appointment);
	}
	
	@DeleteMapping("/delete/{id}")
	public void DeleteAnAppointment(@PathVariable(value = "id") Long appointmentId) {
		if(!appointmentService.findAppointmentById(appointmentId).equals(null))
			appointmentService.deleteAppointmentById(appointmentId);
	}
	
	@GetMapping("/show/{username}")
	public List<Appointment> ShowPatientAppointments(@PathVariable(value = "username") String username){
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = 
				appointmentService.findAllByPatientIdAndPractitionerId(patient.getId(), patient.getPatient().getPractitionerId());
		
		return appointments;
	}
	
	
	@GetMapping("/show-business-hours/{username}")
	public List<Appointment> ShowPractitionerAppointments(@PathVariable(value = "username") String username){
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = appointmentService.findAllByPractitionerId(patient.getId(), patient.getPatient().getPractitionerId());
		
		return appointments;
	}
	
	
	
	@PutMapping("/set-time/{id}")
	public void SetPractitionerWorkingTime(@PathVariable(value = "id") Long practitionerId,
			@Valid @RequestBody List<Worktime> workingTimePerDay) {
		Practitioner practitioner = practitionerService.findPractitionerById(practitionerId).get();
		if(!workingTimePerDay.equals(null)) {
			practitioner.setWorktimes(workingTimePerDay);
			practitionerService.save(practitioner);
		}
	}
	
	@GetMapping("/practitioner-active-time/{id}")
	public List<Worktime> ShowPractitionerWorkingTime(@PathVariable(value = "id") Long practitionerId){
		List<Worktime> worktimes = worktimeService.findAllWorktimeByPractitionerId(practitionerId);
		return worktimes;
	}
	
	@PutMapping("/update-time/{id}")
	public void UpdatePractitionerWorkingTime(@PathVariable(value = "id") Long practitionerId,
			@Valid @RequestBody List<Worktime> workingTimePerDay){		
		Practitioner practitioner = practitionerService.findPractitionerById(practitionerId).get();
		if(!practitioner.equals(null) && !workingTimePerDay.equals(null)) {
			worktimeService.deleteAllWorktimeByPractitionerId(practitionerId);
			worktimeService.saveAllWorktime(workingTimePerDay);
		}
	}
	
}
