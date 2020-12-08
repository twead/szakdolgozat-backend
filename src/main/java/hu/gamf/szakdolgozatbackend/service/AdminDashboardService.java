package hu.gamf.szakdolgozatbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.repository.UserRepository;
import hu.gamf.szakdolgozatbackend.security.service.UserService;

@Service
public class AdminDashboardService extends UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<User> findAll() {
		return userRepository.findAll();
	}

	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}
	
	public boolean existsById(Long id) {
		return userRepository.existsById(id);
	}
	
	public List<User> findAllByRole(String role){
		return userRepository.findAllByRole(role);
	}

	public void delete(User user) {
		userRepository.delete(user);		
	}
	
	public Optional<User> findByUsername(String username){
		return userRepository.findByUsername(username);
	}
	
	public User findExistUsernameForUpdate(String username, Long id) {
		return userRepository.findExistEmailForUpdate(username, id);
	}
	
	public User findExistEmailForUpdate(String email, Long id) {
		return userRepository.findExistEmailForUpdate(email, id);
	}
	
	public User setUserByDetails(User user, User userDetails) {
		user.setUsername(userDetails.getUsername());
		user.setEmail(userDetails.getEmail());	
		user.setName(userDetails.getName());
		user.getUserProfile().setAddress(userDetails.getUserProfile().getAddress());
		user.getUserProfile().setDateOfBorn(userDetails.getUserProfile().getDateOfBorn());
		user.getUserProfile().setIdCard((userDetails.getUserProfile().getIdCard()));
		user.getUserProfile().setSocSecNum(userDetails.getUserProfile().getSocSecNum());
		
		save(user);
		
		return user;
	}
	
	public void setPassword(User user, String newPassword) {
		user.setPassword(passwordEncoder.encode(newPassword));
		save(user);
	}
	
	
}
