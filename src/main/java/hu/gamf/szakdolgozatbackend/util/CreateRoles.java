package hu.gamf.szakdolgozatbackend.util;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import hu.gamf.szakdolgozatbackend.security.entity.Role;
import hu.gamf.szakdolgozatbackend.security.enums.RoleName;
import hu.gamf.szakdolgozatbackend.security.service.RoleService;

@Component
public class CreateRoles implements CommandLineRunner {

   @Autowired
    RoleService roleService;

    @Override
    public void run(String... args) throws Exception {
    	/*
    	Role roleAdmin = new Role(RoleName.ROLE_ADMIN);
        Role roleUser = new Role(RoleName.ROLE_USER);
        roleService.save(roleAdmin);
        roleService.save(roleUser);
        */
    }
}
