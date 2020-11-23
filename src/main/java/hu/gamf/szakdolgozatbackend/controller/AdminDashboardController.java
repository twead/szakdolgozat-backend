package hu.gamf.szakdolgozatbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.gamf.szakdolgozatbackend.dto.Message;
import hu.gamf.szakdolgozatbackend.security.entity.User;
import hu.gamf.szakdolgozatbackend.security.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AdminDashboardController {
	
    @Autowired
    private UserService userService;

    @GetMapping("/patients")
    public List<User> getAllPatient(){  	
        List<User> patientList = userService.findAllByRole("ROLE_USER");       
        return patientList;
    }
    
    @GetMapping("/practitioners")
    public List<User> getAllPractitioners(){  	
        List<User> practitionerList = userService.findAllByRole("ROLE_PRACTITIONER");       
        return practitionerList;
    }

    @GetMapping("/profile")
    public ResponseEntity<User> showPatientProfile(){
    	
    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    	//String username = auth.getPrincipal().toString();
    	String username = auth.getName();
    	    	
    	if(!userService.existsByUsername("twead2"))
    		return new ResponseEntity(new Message("Nem létezik felhasználó ezzel az Id-val!"), HttpStatus.NOT_FOUND);    
    	User patient = userService.getByUsername("twead2").get();
    	return new ResponseEntity(patient, HttpStatus.OK);
    }

}