package hu.gamf.szakdolgozatbackend.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import hu.gamf.szakdolgozatbackend.entity.Role;
import hu.gamf.szakdolgozatbackend.enums.RoleName;
import hu.gamf.szakdolgozatbackend.service.RoleService;

@Component
public class CreateRoles implements CommandLineRunner {

   @Autowired
    RoleService roleService;

    @Override
    public void run(String... args) throws Exception {
    	/*
    	Role roleAdmin = new Role(RoleName.ROLE_ADMIN);
    	Role rolePractitioner = new Role(RoleName.ROLE_PRACTITIONER);
        Role roleUser = new Role(RoleName.ROLE_PATIENT);
        roleService.save(roleAdmin);
        roleService.save(rolePractitioner);
        roleService.save(roleUser);
    	*/
    }
}
