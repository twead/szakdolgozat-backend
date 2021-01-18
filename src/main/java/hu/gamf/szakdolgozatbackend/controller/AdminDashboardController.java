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

@RestController
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/api/dashboard")
@CrossOrigin
public class AdminDashboardController {

	private AdminDashboardService dashboardService;
	
	@Autowired
	public AdminDashboardController(AdminDashboardService dashboardService) {
		this.dashboardService = dashboardService;
	}

	@GetMapping("/patients")
	public List<User> getAllPatient() {
		List<User> patientList = dashboardService.findAllByRole("ROLE_USER");
		return patientList;
	}

	@GetMapping("/practitioners")
	public List<User> getAllPractitioners() {
		List<User> practitionerList = dashboardService.findAllByRole("ROLE_PRACTITIONER");
		return practitionerList;
	}
	
	@GetMapping("/details/{id}")
	public ResponseEntity<User> getUserDetailsById(@PathVariable(value = "id") Long userId) {

		User user = dashboardService.findById(userId).get();
		if (user.equals(null))
			return new ResponseEntity(new Message("Ezzel az Id-val nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);

		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) {
		User user = dashboardService.findById(userId).get();		
		return dashboardService.updateUser(user, userDetails);	
	}

	@DeleteMapping("/delete/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long userId) {

		Map<String, Boolean> response = new HashMap<>();
		
		User user = dashboardService.findById(userId).get();
		if (user.equals(null))
			response.put("Nem található user ezzel az id-val!", Boolean.FALSE);
		
		dashboardService.delete(user);
		
		response.put("Sikeresen törölve!", Boolean.TRUE);
		return response;	
	}
	
}