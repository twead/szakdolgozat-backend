package hu.gamf.szakdolgozatbackend.controller;

import hu.gamf.szakdolgozatbackend.dto.ClientCrudDto;
import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.service.AppointmentService;
import hu.gamf.szakdolgozatbackend.service.PractitionerDashboardService;
import hu.gamf.szakdolgozatbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@PreAuthorize("hasAnyRole('ROLE_PRACTITIONER')")
@RequestMapping("/api/practitioner-dashboard")
@CrossOrigin
public class PractitionerDashboardController {

    private UserService userService;
    private AppointmentService appointmentService;
    private PractitionerDashboardService practitionerDashboard;

    @Autowired
    public PractitionerDashboardController(UserService userService, AppointmentService appointmentService,
                                           PractitionerDashboardService practitionerDashboard) {
        this.userService = userService;
        this.appointmentService = appointmentService;
        this.practitionerDashboard = practitionerDashboard;
    }

    @GetMapping("/show-my-clients/{username}")
    public List<ClientCrudDto> getAllClient(@PathVariable(value = "username") String practitionerUsername) {
        User user = userService.findUserByUsername(practitionerUsername).get();
        List<Appointment> appointmentList = appointmentService.findAllClientByPractitionerId(user.getPractitioner().getId());
        return practitionerDashboard.findClients(appointmentList);
    }

    @DeleteMapping("/clients/delete-appointment/{id}")
    public ResponseEntity deletePatient(@PathVariable(value = "id") Long appointmentId) {
        appointmentService.deleteAppointmentById(appointmentId);
        return new ResponseEntity(HttpStatus.OK);
    }

}
