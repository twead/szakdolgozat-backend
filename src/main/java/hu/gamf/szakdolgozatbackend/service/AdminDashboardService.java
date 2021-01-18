package hu.gamf.szakdolgozatbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.repository.UserRepository;
import hu.gamf.szakdolgozatbackend.security.service.UserService;

@Service
public class AdminDashboardService extends UserService {

	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	public AdminDashboardService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

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
	
	public List<User> findAllPractitionerExceptMe(String username) {
		return userRepository.findAllPractitionerExceptMe(username);
	}
	
	public ResponseEntity updateUser(User user, User userDetails) {

		if (user.equals(null))
			return new ResponseEntity(new Message("Nem létezik a felhasználó!"), HttpStatus.BAD_REQUEST);
		
		if(findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez a felhasználónév foglalt!"), HttpStatus.BAD_REQUEST);	

		if(findExistEmailForUpdate(userDetails.getEmail(), userDetails.getId())!=null)
			return new ResponseEntity(new Message("Ez az email foglalt!"), HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity(setUserByDetails(user, userDetails), HttpStatus.OK);
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
