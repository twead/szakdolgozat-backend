package hu.gamf.szakdolgozatbackend.controller;

import java.util.ArrayList;
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
import hu.gamf.szakdolgozatbackend.entity.Practitioner;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.entity.Worktime;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.service.AppointmentService;
import hu.gamf.szakdolgozatbackend.service.PatientService;
import hu.gamf.szakdolgozatbackend.service.PractitionerService;
import hu.gamf.szakdolgozatbackend.service.UserService;
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
	private UserService userService;

	@Autowired
	public AppointmentController(AppointmentService appointmentService, WorktimeService worktimeService,
			PractitionerService practitionerService, PatientService patientService, UserService userService) {
		this.appointmentService = appointmentService;
		this.worktimeService = worktimeService;
		this.practitionerService = practitionerService;
		this.patientService = patientService;
		this.userService = userService;
	}

	// -------------------------PATIENT HASN'T SELECTED PRACTITIONER
	// YET-------------------------

	@GetMapping("/schedule-practitioners/{username}")
	public List<User> getAllPractitionerExceptMe(@PathVariable(value = "username") String username) {
		User user = practitionerService.findUserByUsername(username).get();
		List<User> practitionerList = practitionerService.findAllPractitionerExceptMe(username);
		return practitionerList;
	}

	@PutMapping("/update-practitioner/{username}")
	public ResponseEntity updatePractitioner(@PathVariable(value = "username") String username,
			@RequestBody Long practitionerId) {
		User user = practitionerService.findUserByUsername(username).get();
		user.getPatient().setPractitionerId(practitionerId);
		practitionerService.saveUser(user);

		return new ResponseEntity(HttpStatus.OK);
	}

	// -------------------------PATIENT HAS ALREADY SELECTED A
	// PRACTITIONER-------------------------

	@PostMapping("/create/{username}")
	public void MadeAnAppointment(@PathVariable(value = "username") String username,
			@RequestBody AppointmentDto appointmentDto) {

		User user = patientService.findUserByUsername(username)
				.orElseThrow(() -> new ApiRequestException("Nem található felhasználó"));

		if (appointmentService.existsAppointmentByTime(appointmentDto.getTime()))
			throw new ApiRequestException("Erre az időpontra nem foglalhatsz!");

		if (appointmentService.existsAppointmentByPatientIdAndPractitionerId(user.getId(),user.getPatient().getPractitionerId()))
			throw new ApiRequestException("Egyszerre egy orvosnál csak egy foglalásod lehet!");

		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId())
				.get();

		// if(practitioner.isWorksOnHolidays()==false)
		if (appointmentService.isTheDateAHolidayDate(appointmentDto.getTime()))
			throw new ApiRequestException("Nem foglalhatsz ünnepnapra!");

		Appointment appointment = new Appointment();
		appointment.setPatient(user.getPatient());
		appointment.setPractitioner(practitioner);
		appointment.setMessage(appointmentDto.getMessage());
		appointment.setTime(appointmentDto.getTime());
		appointmentService.saveAppointment(appointment);
	}

	@DeleteMapping("/delete/{id}")
	public void DeleteAnAppointment(@PathVariable(value = "id") Long appointmentId) {
		appointmentService.findAppointmentById(appointmentId)
				.orElseThrow(() -> new ApiRequestException("Az időpont törlése nem sikerült"));
		appointmentService.deleteAppointmentById(appointmentId);
	}

	@GetMapping("/show/{username}")
	public List<Appointment> ShowPatientAppointments(@PathVariable(value = "username") String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = appointmentService.findAllByPatientIdAndPractitionerId(patient.getId(),
				patient.getPatient().getPractitionerId());

		return appointments;
	}

	@GetMapping("/show-appointments-for-instruction/{username}")
	public List<InstructionDto> ShowPatientAppointmentsForInstruction(@PathVariable(value = "username") String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = appointmentService.findAllByPatientId(patient.getId());
		List<InstructionDto> instructionList = new ArrayList<>();

		for(Appointment appointment: appointments){
			InstructionDto instruction = new InstructionDto();
			instruction.setPractitionerName(appointment.getPractitioner().getUser().getPatient().getName());
			instruction.setTime(appointment.getTime());
			instructionList.add(instruction);
		}

		return instructionList;
	}

	@GetMapping("/show-others-appointments/{username}")
	public List<Appointment> ShowOthersAppointments(@PathVariable(value = "username") String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = appointmentService.findAllExceptTheActualPatient(patient.getId(),
				patient.getPatient().getPractitionerId());

		return appointments;
	}

	@GetMapping("/get-business-hours/{username}")
	public List<Worktime> GetPractitionerWorkingTime(@PathVariable(value = "username") String username) {
		User user = userService.findUserByUsername(username).get();
		return user.getPractitioner().getWorktimes();
	}

	@PutMapping("/set-business-hours/{username}")
	public void SetPractitionerWorkingTime(@PathVariable(value = "username") String username,
			@Valid @RequestBody @Nullable Worktime[] worktimes) {
		User user = userService.findUserByUsername(username).get();

		Worktime worktime;
		for (int i = 0; i < worktimes.length; i++) {

			if ((user.getPractitioner().getWorktimes()).size() < 5) {
				worktime = new Worktime();
				worktime.setDay(worktimes[i].getDay());
				if (!worktimes[i].getFromTime().equals("")) {
					worktime.setFromTime(worktimes[i].getFromTime());
				}else worktime.setFromTime("0:00");
				if (!worktimes[i].getToTime().equals("")) {
					worktime.setToTime(worktimes[i].getToTime());
				}else worktime.setToTime("0:00");
				worktime.setPractitioner(user.getPractitioner());
				worktimeService.saveWorktime(worktime);
			} else {
				worktime = user.getPractitioner().getWorktimes().get(i);
				worktime.setDay(worktimes[i].getDay());
				if (!worktimes[i].getFromTime().equals("")) {
					worktime.setFromTime(worktimes[i].getFromTime());
				}else worktime.setFromTime("0:00");
				if (!worktimes[i].getToTime().equals("")) {
					worktime.setToTime(worktimes[i].getToTime());
				}else worktime.setToTime("0:00");
				worktime.setPractitioner(user.getPractitioner());
				worktimeService.saveWorktime(worktime);
			}
		}
	}
	
	@PostMapping("/works-on-holidays/{username}")
	public void HolidayWorks(@PathVariable(value = "username") String username,
			@RequestBody HolidaysDto worksOnHoliday){
		User user = userService.findUserByUsername(username).get();
		if(user.equals(null))
			throw new ApiRequestException("Ez a felhasználó nem létezik");
		user.getPractitioner().setWorksOnHolidays(worksOnHoliday.isWorksOnHoliday());
		userService.saveUser(user);
	}

	@GetMapping("/works-on-holidays/{username}")
	public HolidaysDto HolidayWorksForWorktimeSettings(@PathVariable(value = "username") String username){
		User user = userService.findUserByUsername(username).get();
		HolidaysDto worksOnHolidays = new HolidaysDto();
		worksOnHolidays.setWorksOnHoliday(user.getPractitioner().getWorksOnHolidays());
		return worksOnHolidays;
	}
	
	@GetMapping("/my-practitioner-works-on-holidays/{username}")
	public HolidaysDto setHolidayWorks(@PathVariable(value = "username") String username){
		User user = userService.findUserByUsername(username).get();
		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId()).get();
		HolidaysDto worksOnHolidays = new HolidaysDto();
		worksOnHolidays.setWorksOnHoliday(practitioner.getWorksOnHolidays());
		return worksOnHolidays;
	}

	@GetMapping("/my-practitioner-working-time/{username}")
	public List<Worktime> ShowPractitionerWorkingTime(@PathVariable(value = "username") String username) {
		
		User user = userService.findUserByUsername(username).get();
		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId()).get();
		List<Worktime> worktimes = practitioner.getWorktimes();
		return worktimes;
	}

}
