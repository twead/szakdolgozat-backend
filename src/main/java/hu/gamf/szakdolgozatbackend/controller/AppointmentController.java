package hu.gamf.szakdolgozatbackend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.service.AdminDashboardService;

@RestController
@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_PRACTITIONER')")
@RequestMapping("/api/appointment")
@CrossOrigin
public class AppointmentController {
		
	private AdminDashboardService dashboardService;
	
	@Autowired
	public AppointmentController(AdminDashboardService dashboardService) {
		this.dashboardService = dashboardService;
	}
	
	//-------------------------PATIENT HASN'T SELECTED PRACTITIONER YET-------------------------

	@GetMapping("/schedule-practitioners/{username}")
	public List<User> getAllPractitionerExceptMe(@PathVariable(value = "username") String username) {
		User user = dashboardService.findByUsername(username).get();
		List<User> practitionerList = dashboardService.findAllPractitionerExceptMe(username);
		return practitionerList;
	}

	@PutMapping("/select-practitioner/{username}")
	public ResponseEntity savePractitioner(@PathVariable(value = "username") String username,
			@Valid @RequestBody Long practitionerId) {

		User user = dashboardService.findByUsername(username).get();

		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);

		user.getUserProfile().setPractitionerId(practitionerId);
		dashboardService.save(user);

		return new ResponseEntity(new Message("Háziorvosod sikeresen kiválasztottad!"), HttpStatus.OK);
	}
	
	
	//-------------------------PATIENT HAS ALREADY SELECTED PRACTITIONER-------------------------

}
