package hu.gamf.szakdolgozatbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.repository.AppointmentRepository;

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

	public List findAllByPatientId(Long patientId) {
		return appointmentRepository.findAllByPatientId(patientId);
	}
	
	public List findAllExceptTheActualPatient(Long patientId, Long practitionerId) {
		return appointmentRepository.findAllExceptTheActualPatient(patientId, practitionerId);
	}
	
	public boolean existsAppointmentByTime(String time) {
		return appointmentRepository.existsByTime(time);
	}
	
	public boolean existsAppointmentByPatientIdAndPractitionerId(Long patientId, Long practitionerId) {
		return appointmentRepository.existsByPatientIdAndPractitionerId(patientId, practitionerId);
	}
	
	public boolean isTheDateAHolidayDate(String date) {
		String[] holidays = {
				"01-01",
				"03-15",
				"05-01",
				"08-20",
				"10-23",
				"11-01",
				"12-24",
				"12-25",
				};
		
		for(int i=0; i<holidays.length; i++) { 
			if(date.substring(5, 10).equals(holidays[i])) {
				return true;
			}
		}
		return false;
	}
	
	public void deleteAppointmentByPractitionerId(Long id) {
		appointmentRepository.deleteAllByPractitionerId(id);
	}

	public List<Appointment> findAllClientByPractitionerId(Long id) { return appointmentRepository.findAllByPractitionerIdOrderByTime(id); }
}
