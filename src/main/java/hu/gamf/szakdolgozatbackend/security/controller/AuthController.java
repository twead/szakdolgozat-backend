package hu.gamf.szakdolgozatbackend.security.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.MimeTypeUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.dto.JwtDto;
import hu.gamf.szakdolgozatbackend.security.dto.LoginUser;
import hu.gamf.szakdolgozatbackend.security.dto.NewUser;
import hu.gamf.szakdolgozatbackend.security.jwt.JwtProvider;
import hu.gamf.szakdolgozatbackend.security.service.RegistrationService;
import hu.gamf.szakdolgozatbackend.security.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	RegistrationService registrationService;
	
	@PostMapping(path = "/registration", produces = {MimeTypeUtils.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> addUser(@Valid @RequestBody NewUser newUser, BindingResult bindingResult){
		if(bindingResult.hasErrors())
			return new ResponseEntity(new Message("Hibás mezők vagy nem megfelelő email!"), HttpStatus.BAD_REQUEST);
		if(userService.existsByUsername(newUser.getUsername()))
			return new ResponseEntity(new Message("Felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);
		if(userService.existsByEmail(newUser.getEmail()))
			return new ResponseEntity(new Message("Email cím foglalt!"), HttpStatus.BAD_REQUEST);
		
		registrationService.setRolesSaveUserAndProfile(newUser);
		return new ResponseEntity(new Message("user saved"),HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUser, BindingResult bindingResult){
		if(bindingResult.hasErrors())
			return new ResponseEntity(new Message("Hibás felhasználónév vagy jelszó!"), HttpStatus.BAD_REQUEST);
		
		JwtDto jwtDto = registrationService.setAuthenticationAndToken(loginUser);
		return new ResponseEntity(jwtDto,HttpStatus.OK);		
	}
	
}
