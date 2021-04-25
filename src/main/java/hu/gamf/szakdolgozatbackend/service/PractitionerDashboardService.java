package hu.gamf.szakdolgozatbackend.service;

import hu.gamf.szakdolgozatbackend.dto.ClientCrudDto;
import hu.gamf.szakdolgozatbackend.entity.Appointment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PractitionerDashboardService {

    public List<ClientCrudDto> findClients(List<Appointment> appointmentList){
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

}
