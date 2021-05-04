package hu.gamf.szakdolgozatbackend.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Role;
import hu.gamf.szakdolgozatbackend.enums.RoleName;
import hu.gamf.szakdolgozatbackend.repository.RoleRepository;

@Service
@Transactional
public class RoleService {
	
	@Autowired
	private RoleRepository roleRepository;
	
	public Optional<Role> getByRoleName(RoleName roleName){
		return roleRepository.findByRoleName(roleName);
	}
	
	public void save(Role role) {
		roleRepository.save(role);
	}
	
}
