package hu.gamf.szakdolgozatbackend.security.service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.security.dto.JwtDto;
import hu.gamf.szakdolgozatbackend.security.dto.LoginUser;
import hu.gamf.szakdolgozatbackend.security.dto.NewUser;
import hu.gamf.szakdolgozatbackend.security.entity.Role;
import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.entity.UserProfile;
import hu.gamf.szakdolgozatbackend.security.enums.RoleName;
import hu.gamf.szakdolgozatbackend.security.jwt.JwtProvider;
import hu.gamf.szakdolgozatbackend.service.EmailService;

@Service
public class RegistrationService {
	
	private PasswordEncoder passwordEncoder;
	private RoleService roleService;
	private UserService userService;
	private AuthenticationManager authenticationManager;	
	private JwtProvider jwtProvider;	
	private EmailService emailService;	
	
	@Autowired
	public RegistrationService(PasswordEncoder passwordEncoder, RoleService roleService, UserService userService,
			AuthenticationManager authenticationManager, JwtProvider jwtProvider, EmailService emailService) {
		this.passwordEncoder = passwordEncoder;
		this.roleService = roleService;
		this.userService = userService;
		this.authenticationManager = authenticationManager;
		this.jwtProvider = jwtProvider;
		this.emailService = emailService;
	}

	public void setRolesSaveUserAndProfile(NewUser newUser) {
		
		UserProfile userProfile = new UserProfile(
				newUser.getAddress(),
				newUser.getIdCard(),
				newUser.getSocSecNum(),
				newUser.getDateOfBorn()
				);
		userProfile.setActivation(generatedKey());
		
		User user = new User(
				newUser.getUsername(),
				passwordEncoder.encode(newUser.getPassword()),
				newUser.getEmail(),
				newUser.getName(),
				userProfile
				);
		
		userProfile.setUser(user);
		
		Set<Role> roles = new HashSet<>();
		roles.add(roleService.getByRoleName(RoleName.ROLE_PRACTITIONER).get());
		if(newUser.getRoles().contains("admin"))
			roles.add(roleService.getByRoleName(RoleName.ROLE_ADMIN).get());
		
		user.setRoles(roles);
		userService.save(user);
		
		emailService.sendActivationEmail(user);
	}
	
	public JwtDto setAuthenticationAndToken (LoginUser loginUser) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword())
			);	
	SecurityContextHolder.getContext().setAuthentication(authentication);
	String jwt = jwtProvider.generateToken(authentication);
	JwtDto jwtDto = new JwtDto(jwt);
	return jwtDto;
	}
	
	private String generatedKey() {
		Random random = new Random();
		char[] code = new char[16];
		for (int i = 0; i < code.length; i++) {
			code[i] = (char) ('a' + random.nextInt(26));
		}
		return new String(code);
	}
	
	public String userActivation(String code) {
		User user = userService.userActivation(code).get();
		if (user == null)
			return "noresult";

		user.getUserProfile().setIsEnabled(true);
		user.getUserProfile().setActivation("");
		userService.save(user);
		return "ok";
	}
	
}
