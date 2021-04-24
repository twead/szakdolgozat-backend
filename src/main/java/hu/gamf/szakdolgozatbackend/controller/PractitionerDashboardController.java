package hu.gamf.szakdolgozatbackend.controller;

import hu.gamf.szakdolgozatbackend.dto.AppointmentDto;
import hu.gamf.szakdolgozatbackend.dto.ClientCrudDto;
import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import hu.gamf.szakdolgozatbackend.service.AppointmentService;
import hu.gamf.szakdolgozatbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@PreAuthorize("hasAnyRole('ROLE_PRACTITIONER')")
@RequestMapping("/api/practitioner-dashboard")
@CrossOrigin
public class PractitionerDashboardController {

    private UserService userService;
    private AppointmentService appointmentService;

    @Autowired
    public PractitionerDashboardController(UserService userService, AppointmentService appointmentService) {
        this.userService = userService;
        this.appointmentService = appointmentService;
    }


    @GetMapping("/show-my-clients/{username}")
    public List<ClientCrudDto> getAllClient(@PathVariable(value = "username") String practitionerUsername) {
        User user = userService.findUserByUsername(practitionerUsername).get();
        List<Appointment> appointmentList = appointmentService.findAllClientByPractitionerId(user.getPractitioner().getId());

        List<ClientCrudDto> clientList = new ArrayList<>();
        for(Appointment appointment: appointmentList){
            ClientCrudDto dto = new ClientCrudDto();
            dto.setAppointmentId(appointment.getId());
            dto.setClientName(appointment.getPatient().getName());
            dto.setTime(appointment.getTime());
            if(appointment.getMessage().equals(appointment.getPatient().getName()))
                dto.setMessage("");
            else
                dto.setMessage(appointment.getMessage());
            clientList.add(dto);
        }

        return clientList;
    }

    @PutMapping("/clients/update-time/{id}")
    public ResponseEntity<Appointment> updatePatient(@PathVariable(value = "id") Long appointmentId,
                                                     @Valid @RequestBody AppointmentDto appointmentDto) {
        Appointment appointment = appointmentService.findAppointmentById(appointmentId).orElseThrow(
                () -> new ApiRequestException("Ez a foglalás nem található!")
        );
        appointment.setTime(appointmentDto.getTime());
        return new ResponseEntity(appointment, HttpStatus.OK);
    }

    @DeleteMapping("/clients/delete-appointment/{id}")
    public ResponseEntity deletePatient(@PathVariable(value = "id") Long appointmentId) {
        appointmentService.deleteAppointmentById(appointmentId);
        return new ResponseEntity(HttpStatus.OK);
    }


}
