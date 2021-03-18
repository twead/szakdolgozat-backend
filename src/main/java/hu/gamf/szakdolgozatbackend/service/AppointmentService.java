package hu.gamf.szakdolgozatbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.repository.AppointmentRepository;
import hu.gamf.szakdolgozatbackend.repository.WorktimeRepository;

@Service
public class AppointmentService {
	
	private AppointmentRepository appointmentRepository;

	@Autowired
	public AppointmentService(AppointmentRepository appointmentRepository) {
		this.appointmentRepository = appointmentRepository;
	}
	
	public void saveAppointment(Appointment appointment) {
		appointmentRepository.save(appointment);
	}

	public Optional<Appointment> findAppointmentById(Long appointmentId) {
		return appointmentRepository.findById(appointmentId);
	}

	public void deleteAppointmentById(Long appointmentId) {
		appointmentRepository.deleteById(appointmentId);		
	}

	public List findAllByPatientIdAndPractitionerId(Long patientId, Long practitionerId) {
		return appointmentRepository.findAllByPatientIdAndPractitionerId(patientId, practitionerId);
	}
	
	public List findAllByPractitionerId(Long patientId, Long practitionerId) {
		return appointmentRepository.findAllByPractitionerId(patientId, practitionerId);
	}
	
	
}
