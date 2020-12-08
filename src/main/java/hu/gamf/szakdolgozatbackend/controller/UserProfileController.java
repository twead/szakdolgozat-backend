package hu.gamf.szakdolgozatbackend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api")
@CrossOrigin
public class UserProfileController {
	@Autowired
	private AdminDashboardService dashboardService;
	
	@GetMapping("/profile-details/{username}")
	public ResponseEntity<User> getProfileDetails(@PathVariable(value = "username") String username) {

		User user = dashboardService.findByUsername(username).get();
		
		return new ResponseEntity(user, HttpStatus.OK);
	}
	
	@PutMapping("/profile-update/{username}")
	public ResponseEntity<User> updateProfile(@PathVariable(value = "username") String username,
			@Valid @RequestBody User userDetails) {

		User user = dashboardService.findByUsername(username).get();
		
		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik a felhasználó!"), HttpStatus.BAD_REQUEST);
		
		if(dashboardService.findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez a felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);	

		if(dashboardService.findExistEmailForUpdate(userDetails.getEmail(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez az email foglalt!"), HttpStatus.BAD_REQUEST);
		

		return new ResponseEntity(dashboardService.setUserByDetails(user, userDetails), HttpStatus.OK);
	}
	
	@PutMapping("/password-update/{username}")
	public ResponseEntity updatePassword(@PathVariable(value = "username") String username,
			@Valid @RequestBody String newPassword) {

		User user = dashboardService.findByUsername(username).get();
		
		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik felhasználó!"), HttpStatus.BAD_REQUEST);
		
		dashboardService.setPassword(user, newPassword);
		
		return new ResponseEntity(new Message("Jelszó sikeresen megváltoztatva!"),HttpStatus.OK);
	}
	
}
