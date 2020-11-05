package hu.gamf.szakdolgozatbackend.security.service;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

@Service
public class RegistrationService {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtProvider jwtProvider;

	public void setRolesSaveUserAndProfile(NewUser newUser) {
		
		UserProfile userProfile = new UserProfile(
				newUser.getAddress(),
				newUser.getIdCard(),
				newUser.getSocSecNum(),
				newUser.getDateOfBorn()
				);
		
		User user = new User(
				newUser.getUsername(),
				passwordEncoder.encode(newUser.getPassword()),
				newUser.getEmail(),
				newUser.getName(),
				userProfile
				);
		
		userProfile.setUser(user);
		
		Set<Role> roles = new HashSet<>();
		roles.add(roleService.getByRoleName(RoleName.ROLE_USER).get());
		if(newUser.getRoles().contains("admin"))
			roles.add(roleService.getByRoleName(RoleName.ROLE_ADMIN).get());
		
		user.setRoles(roles);
		userService.save(user);
	}
	
	public JwtDto setAuthenticationAndToken (LoginUser loginUser) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword())
			);	
	SecurityContextHolder.getContext().setAuthentication(authentication);
	String jwt = jwtProvider.generateToken(authentication);
	UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	
	JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
	return jwtDto;
	}
	
}
