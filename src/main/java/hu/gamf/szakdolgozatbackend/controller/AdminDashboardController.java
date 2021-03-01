package hu.gamf.szakdolgozatbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.entity.User;
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

	@GetMapping("/patients/details/{id}")
	public ResponseEntity<User> getPatientDetailsById(@PathVariable(value = "id") Long userId) {

		User user = patientService.findUserById(userId).get();
		if (user.equals(null))
			return new ResponseEntity(new Message("Ezzel az Id-val nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);

		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PutMapping("/patients/update/{id}")
	public ResponseEntity<User> updatePatient(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) {
		User user = patientService.findUserById(userId).get();
		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik a felhasználó!"), HttpStatus.BAD_REQUEST);
		
		if(patientService.findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez a felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);
		
		if(patientService.findExistEmailForUpdate(userDetails.getPatient().getEmail(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez az email foglalt!"), HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity(dashboardService.setUserByDetails(user, userDetails), HttpStatus.OK);
		
	}

	@DeleteMapping("/patients/delete/{id}")
	public Map<String, Boolean> deletePatient(@PathVariable(value = "id") Long userId) {

		Map<String, Boolean> response = new HashMap<>();
		
		User user = patientService.findUserById(userId).get();
		if (user.equals(null))
			response.put("Nem található felhasználó ezzel az id-val!", Boolean.FALSE);
		
		patientService.deleteUser(user);
		
		response.put("Sikeresen törölve!", Boolean.TRUE);
		return response;	
	}	
	
	@GetMapping("/practitioners")
	public List<User> getAllPractitioners() {
		List<User> practitionerList = practitionerService.findAllUserByRole("ROLE_PRACTITIONER");
		return practitionerList;
	}
	
	@GetMapping("/practitioners/details/{id}")
	public ResponseEntity<User> getPractitionerDetailsById(@PathVariable(value = "id") Long userId) {

		User user = practitionerService.findUserById(userId).get();
		if (user.equals(null))
			return new ResponseEntity(new Message("Ezzel az Id-val nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);

		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PutMapping("/practitioners/update/{id}")
	public ResponseEntity<User> updatePractitioner(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) {
		User user = practitionerService.findUserById(userId).get();
		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik a felhasználó!"), HttpStatus.BAD_REQUEST);
		
		if(practitionerService.findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez a felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);
		
		if(patientService.findExistEmailForUpdate(userDetails.getPatient().getEmail(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez az email foglalt!"), HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity(dashboardService.setUserByDetails(user, userDetails), HttpStatus.OK);
		
	}

	@DeleteMapping("/practitioners/delete/{id}")
	public Map<String, Boolean> deletePractitioner(@PathVariable(value = "id") Long userId) {

		Map<String, Boolean> response = new HashMap<>();
		
		User user = practitionerService.findUserById(userId).get();
		if (user.equals(null))
			response.put("Nem található felhasználó ezzel az id-val!", Boolean.FALSE);
		
		practitionerService.deleteUser(user);
		
		response.put("Sikeresen törölve!", Boolean.TRUE);
		return response;	
	}
	
}