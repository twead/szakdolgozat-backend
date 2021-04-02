package hu.gamf.szakdolgozatbackend.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.service.AdminDashboardService;
import hu.gamf.szakdolgozatbackend.service.PatientService;
import hu.gamf.szakdolgozatbackend.service.PractitionerService;

@RestController
@PreAuthorize("hasRole('ROLE_PRACTITIONER')")
@RequestMapping("/api/dashboard")
@CrossOrigin
public class AdminDashboardController {

	private PatientService patientService;
	private PractitionerService practitionerService;
	private AdminDashboardService dashboardService;
	
	@Autowired
	public AdminDashboardController(AdminDashboardService dashboardService, PatientService patientService,
			PractitionerService practitionerService) {
		this.dashboardService = dashboardService;
		this.patientService = patientService;
		this.practitionerService = practitionerService;
	}

	@GetMapping("/patients")
	public List<User> getAllPatient() {
		List<User> patientList = patientService.findAllUserByRole("ROLE_PATIENT");
		return patientList;
	}
	
	@GetMapping("/practitioners")
	public List<User> getAllPractitioners() {
		List<User> practitionerList = practitionerService.findAllUserByRole("ROLE_PRACTITIONER");
		return practitionerList;
	}

	@GetMapping("/patients/details/{id}")
	public ResponseEntity<User> getPatientDetailsById(@PathVariable(value = "id") Long userId) {
		User user = patientService.findUserById(userId).orElseThrow(
				() -> new ApiRequestException("Nem található felhasználó ezzel az id-val!")
			);
		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PutMapping("/patients/update/{id}")
	public ResponseEntity<User> updatePatient(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) {
		User user = dashboardService.updatePatientInDashboard(userId, userDetails);
		return new ResponseEntity(user, HttpStatus.OK);
	}
	
	@GetMapping("/patients/upgrade-to-practitioner/{id}")
	public ResponseEntity upgradePatientToPractitioner(@PathVariable(value = "id") Long userId) {		
		dashboardService.setPractitionerRoleToUserById(userId);		
		return new ResponseEntity(HttpStatus.OK);		
	}
	
	@GetMapping("/practitioner/downgrade-to-patient/{id}")
	public ResponseEntity downgradePractitionerToPatient(@PathVariable(value = "id") Long userId) {		
		dashboardService.removePractitionerRoleToUserById(userId);		
		return new ResponseEntity(HttpStatus.OK);
	}

	@DeleteMapping("/patients/delete/{id}")
	public ResponseEntity deletePatient(@PathVariable(value = "id") Long userId) {		
		patientService.deleteUserById(userId);
		return new ResponseEntity(HttpStatus.OK);	
	}
	
}