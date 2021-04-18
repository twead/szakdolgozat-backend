package hu.gamf.szakdolgozatbackend.service;

import java.util.List;
import java.util.Optional;

import hu.gamf.szakdolgozatbackend.entity.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.repository.PatientRepository;
import hu.gamf.szakdolgozatbackend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PatientRepository patientRepository;

	public Optional<User> findUserById(Long id) {
		return userRepository.findById(id);
	}
	
	public List<User> findAllUserByRole(String role){
		return userRepository.findAllByRole(role);
	}

	public void deleteUser(User user) {
		userRepository.delete(user);		
	}
	
	public void deleteUserById(Long id) {
		User user = userRepository.findById(id).orElseThrow(
				() -> new ApiRequestException("Nem található felhasználó ezzel az id-val!")
			);
		userRepository.delete(user);		
	}

	public Optional<User> findUserByUsername(String username){
		return userRepository.findByUsername(username);
	}
	
	public boolean existsUserByUsername(String username) {
		return userRepository.existsByUsername(username);
	}
	
	public boolean existsUserByEmail(String email) {
		return patientRepository.existsByEmail(email);
	}
	
	public User findExistUsernameForUpdate(String username, Long id) {
		return userRepository.findExistUsernameForUpdate(username, id);
	}
	
	public Optional<User> userActivation(String code) {
		return userRepository.findByActivation(code);
	}
	
	public List<User> findAllPractitionerExceptMe(String username) {
		return userRepository.findAllPractitionerExceptMe(username);
	}
	
	public void saveUser(User user) {
		userRepository.save(user);
	}

	public Patient findUserByEmail(String email) { return patientRepository.findByEmail(email); }

	public User findUserByResetPasswordCode(String code){ return userRepository.findByResetPasswordCode(code); }

}
