package hu.gamf.szakdolgozatbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.apache.commons.lang3.builder.HashCodeExclude;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import hu.gamf.szakdolgozatbackend.security.enums.RoleName;
import hu.gamf.szakdolgozatbackend.service.AdminDashboardService;

@RestController
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/api/dashboard")
@CrossOrigin
public class AdminDashboardController {

	@Autowired
	private AdminDashboardService dashboardService;

	@Autowired
	private PasswordEncoder passwordEncoder;

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
	
	@GetMapping("/schedule-practitioners/{username}")
	public List<User> getAllPractitionerExceptMe(@PathVariable(value = "username") String username) {
		
		User user = dashboardService.findByUsername(username).get();
		
		if (user.equals(null))
			return null;
		
		List<User> practitionerList = dashboardService.findAllPractitionerExceptMe(username);
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
		
		if (user.equals(null))
			return new ResponseEntity(new Message("Ezzel az Id-val nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);
		
		if(dashboardService.findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez a felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);	

		if(dashboardService.findExistEmailForUpdate(userDetails.getEmail(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez az email foglalt!"), HttpStatus.BAD_REQUEST);
		

		return new ResponseEntity(dashboardService.setUserByDetails(user, userDetails), HttpStatus.OK);
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