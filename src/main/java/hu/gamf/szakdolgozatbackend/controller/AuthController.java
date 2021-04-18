package hu.gamf.szakdolgozatbackend.controller;

import java.text.ParseException;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import hu.gamf.szakdolgozatbackend.dto.ForgotPasswordDto;
import hu.gamf.szakdolgozatbackend.dto.UpdatePasswordDto;
import hu.gamf.szakdolgozatbackend.entity.User;
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

import hu.gamf.szakdolgozatbackend.dto.LoginUser;
import hu.gamf.szakdolgozatbackend.dto.NewUser;
import hu.gamf.szakdolgozatbackend.security.dto.JwtDto;
import hu.gamf.szakdolgozatbackend.security.jwt.JwtProvider;
import hu.gamf.szakdolgozatbackend.service.RegistrationService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
	
	private RegistrationService registrationService;
	private JwtProvider jwtProvider;

	@Autowired
	public AuthController(RegistrationService registrationService, JwtProvider jwtProvider) {
		this.registrationService = registrationService;
		this.jwtProvider = jwtProvider;
	}

	@PostMapping(path = "/registration", produces = {MimeTypeUtils.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> addUser(@Valid @RequestBody NewUser newUser, BindingResult bindingResult){	
		registrationService.setRolesSaveUserAndProfile(newUser);		
		return new ResponseEntity(HttpStatus.CREATED);
	}
	
	@GetMapping(path = "/activation/{code}")
	public ResponseEntity activation(@PathVariable("code") String code) {
		registrationService.userActivation(code);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUser){		
		JwtDto jwtDto = registrationService.setAuthenticationAndToken(loginUser);
		return new ResponseEntity(jwtDto,HttpStatus.OK);		
	}
	
	@PostMapping("/refresh")
	public ResponseEntity<JwtDto> refresh(@RequestBody JwtDto jwtDto) throws ParseException {
		String token = jwtProvider.refreshToken(jwtDto);
		JwtDto jwt = new JwtDto(token);
		return new ResponseEntity(jwt, HttpStatus.OK);
	}

	@PostMapping(path = "/forgot-password")
	public void forgotPassword(@RequestBody ForgotPasswordDto forgotPasswordDto){
		User user = registrationService.findUserByEmail(forgotPasswordDto.getEmail());
		registrationService.sendForgotPasswordMessage(user);
	}

	@GetMapping(path = "/reset-password/{code}")
	public ResponseEntity<User> resetPassword(@PathVariable("code") String code) {
		User user = registrationService.findUserByResetPasswordCode(code);
		return new ResponseEntity(user, HttpStatus.OK);
	}

	@PostMapping(path = "/update-password/{code}")
	public void updatePassword(@PathVariable("code") String code, @RequestBody UpdatePasswordDto updatePasswordDto){
		User user = registrationService.findUserByResetPasswordCode(code);
		registrationService.updateForgotPassword(user, updatePasswordDto.getPassword());
	}
	
}
