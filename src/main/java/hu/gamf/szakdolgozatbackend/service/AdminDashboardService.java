package hu.gamf.szakdolgozatbackend.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Practitioner;
import hu.gamf.szakdolgozatbackend.entity.Role;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.enums.RoleName;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.repository.UserRepository;

@Service
public class AdminDashboardService {

	private PatientService patientService;
	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;
	private RoleService roleService;
	private PractitionerService practitionerService;
	
	@Autowired
	public AdminDashboardService(PatientService patientService, UserRepository userRepository,
			PasswordEncoder passwordEncoder, RoleService roleService, PractitionerService practitionerService) {
		this.patientService = patientService;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.roleService = roleService;
		this.practitionerService = practitionerService;
	}

	public void setPassword(User user, String newPassword) {
		user.setPassword(passwordEncoder.encode(newPassword));
		userRepository.save(user);
	}
	
	public void setPractitionerRoleToUserById(Long id) {
		User user = patientService.findUserById(id).orElseThrow(
				() -> new ApiRequestException("Nem létezik a felhasználó!")
			);	
		
		for(Role role : user.getRoles()) {
			if(role.getRoleName().equals(RoleName.ROLE_PRACTITIONER))
				throw new ApiRequestException("Már orvos!");
		}
		
		Set<Role> roles = new HashSet<>();
		roles.add(roleService.getByRoleName(RoleName.ROLE_PATIENT).get());
		roles.add(roleService.getByRoleName(RoleName.ROLE_PRACTITIONER).get());
		user.setRoles(roles);
		
		Practitioner practitioner = new Practitioner();
		practitioner.setUser(user);
		
		user.setPractitioner(practitioner);	
		
		practitionerService.saveUser(user);
	}
	
	public User updatePatientInDashboard(Long id, User userDetails) {
		
		User user = patientService.findUserById(id).orElseThrow(
				() -> new ApiRequestException("Nem létezik a felhasználó!")
			);
		
		if(patientService.findExistUsernameForUpdate(userDetails.getUsername(), userDetails.getId())!=null)
			throw new ApiRequestException("Ez a felhasználónév foglalt!");

		return setUserByDetails(user, userDetails);
	}
	
	public User setUserByDetails(User user, User userDetails) {
		
		if(patientService.findExistEmailForUpdate(userDetails.getPatient().getEmail(), userDetails.getId())!=null)
			throw new ApiRequestException("Ez az email foglalt!");
		
		user.setUsername(userDetails.getUsername());
		user.getPatient().setEmail(userDetails.getPatient().getEmail());	
		user.getPatient().setName(userDetails.getPatient().getName());
		user.getPatient().setAddress(userDetails.getPatient().getAddress());
		user.getPatient().setDateOfBorn(userDetails.getPatient().getDateOfBorn());

		userRepository.save(user);
		return user;		
	}
	
}
