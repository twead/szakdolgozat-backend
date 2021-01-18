package hu.gamf.szakdolgozatbackend.security.controller;

import java.text.ParseException;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.dto.JwtDto;
import hu.gamf.szakdolgozatbackend.security.dto.LoginUser;
import hu.gamf.szakdolgozatbackend.security.dto.NewUser;
import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.jwt.JwtProvider;
import hu.gamf.szakdolgozatbackend.security.service.RegistrationService;
import hu.gamf.szakdolgozatbackend.security.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
	
	private UserService userService;
	private RegistrationService registrationService;
	private JwtProvider jwtProvider;

	@Autowired
	public AuthController(UserService userService, RegistrationService registrationService, JwtProvider jwtProvider) {
		this.userService = userService;
		this.registrationService = registrationService;
		this.jwtProvider = jwtProvider;
	}

	@PostMapping(path = "/registration", produces = {MimeTypeUtils.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> addUser(@Valid @RequestBody NewUser newUser, BindingResult bindingResult){
		if(bindingResult.hasErrors())
			return new ResponseEntity(new Message("Hibás mezők vagy nem megfelelő email!"), HttpStatus.BAD_REQUEST);
		if(userService.existsByUsername(newUser.getUsername()))
			return new ResponseEntity(new Message("Felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);
		if(userService.existsByEmail(newUser.getEmail()))
			return new ResponseEntity(new Message("Email cím foglalt!"), HttpStatus.BAD_REQUEST);
		
		registrationService.setRolesSaveUserAndProfile(newUser);
		
		
		return new ResponseEntity(new Message("Sikeres regisztráció!"),HttpStatus.CREATED);
	}
	
	@GetMapping(path = "/activation/{code}")
	public ResponseEntity activation(@PathVariable("code") String code, HttpServletResponse response) {
		
		registrationService.userActivation(code);
		return new ResponseEntity(new Message("Fiókod aktiválásra került!"),HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUser, BindingResult bindingResult){
		
		if(bindingResult.hasErrors())
			return new ResponseEntity(new Message("Hibás felhasználónév vagy jelszó!"), HttpStatus.BAD_REQUEST);

		try {
			User user = userService.getByUsername(loginUser.getUsername()).get();
			
			if(!user.getUserProfile().getActivation().isEmpty())
				return new ResponseEntity(new Message("Erősítsd meg az emailedet!"), HttpStatus.BAD_REQUEST);
		
		}catch(Exception e) {
			return new ResponseEntity(new Message("Hibás felhasználónév vagy jelszó!"), HttpStatus.BAD_REQUEST);
		}

		JwtDto jwtDto = registrationService.setAuthenticationAndToken(loginUser);
		return new ResponseEntity(jwtDto,HttpStatus.OK);		
	}
	
	@PostMapping("/refresh")
	public ResponseEntity<JwtDto> refresh(@RequestBody JwtDto jwtDto) throws ParseException {
		String token = jwtProvider.refreshToken(jwtDto);
		JwtDto jwt = new JwtDto(token);
		return new ResponseEntity(jwt, HttpStatus.OK);
	}
	
}
