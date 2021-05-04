package hu.gamf.szakdolgozatbackend.controller;

import javax.validation.Valid;

import hu.gamf.szakdolgozatbackend.service.UserService;
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

import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.service.AdminDashboardService;

@RestController
@PreAuthorize("hasAnyRole('ROLE_PRACTITIONER','ROLE_PATIENT')")
@RequestMapping("/api/profile")
@CrossOrigin
public class UserProfileController {

	private UserService userService;
	private AdminDashboardService dashboardService;

	@Autowired
	public UserProfileController(UserService userService, AdminDashboardService dashboardService) {
		this.userService = userService;
		this.dashboardService = dashboardService;
	}

	@GetMapping("/details/{username}")
	public ResponseEntity<User> getProfileDetails(@PathVariable(value = "username") String username) {
		User user = userService.findUserByUsername(username).get();
		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PutMapping("/update/{username}")
	public ResponseEntity<User> updateProfile(@PathVariable(value = "username") String username,
			@Valid @RequestBody User userDetails) {
		User user = userService.findUserByUsername(username).get();
		return new ResponseEntity(dashboardService.setUserByDetails(user, userDetails), HttpStatus.OK);
	}

	@PutMapping("/password-update/{username}")
	public ResponseEntity updatePassword(@PathVariable(value = "username") String username,
			@Valid @RequestBody String newPassword) {	
		User user = userService.findUserByUsername(username).get();
		dashboardService.setPassword(user, newPassword);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
