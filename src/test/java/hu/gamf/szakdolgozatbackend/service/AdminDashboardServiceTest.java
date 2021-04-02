package hu.gamf.szakdolgozatbackend.service;

import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.repository.UserRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

import static org.junit.Assert.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class AdminDashboardServiceTest {

    @Autowired
    private PatientService patientService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleService roleService;
    @Autowired
    private PractitionerService practitionerService;

   /* @Test
    public void test(){
        AdminDashboardService test1 = new AdminDashboardService(patientService, userRepository, passwordEncoder, roleService, practitionerService);
        User user = userRepository.findById(2L).get();
        User userDetails = patientService.findUserById(2L).get();


        userDetails.setId(2L);
        userDetails.setUsername("asdads2");
        userDetails.getPatient().setEmail("asddsad@asd.hu");
        userDetails.getPatient().setName("géza géza");
        userDetails.getPatient().setAddress("botna");
        userDetails.getPatient().setDateOfBorn(new Date("2020-10-20 02:00:00)"));

        test1.setUserByDetails(user, userDetails);

        assertEquals(user, userDetails);
    }*/


}