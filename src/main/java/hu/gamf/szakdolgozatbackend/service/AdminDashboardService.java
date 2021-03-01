package hu.gamf.szakdolgozatbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.repository.UserRepository;

@Service
public class AdminDashboardService {

	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	public AdminDashboardService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}
	
	public User setUserByDetails(User user, User userDetails) {
		user.setUsername(userDetails.getUsername());
		user.getPatient().setEmail(userDetails.getPatient().getEmail());	
		user.getPatient().setName(userDetails.getPatient().getName());
		user.getPatient().setAddress(userDetails.getPatient().getAddress());
		user.getPatient().setDateOfBorn(userDetails.getPatient().getDateOfBorn());
		user.getPatient().setIdCard((userDetails.getPatient().getIdCard()));
		user.getPatient().setSocSecNum(userDetails.getPatient().getSocSecNum());
		
		userRepository.save(user);
		
		return user;
	}
	
	public void setPassword(User user, String newPassword) {
		user.setPassword(passwordEncoder.encode(newPassword));
		userRepository.save(user);
	}
	
}
