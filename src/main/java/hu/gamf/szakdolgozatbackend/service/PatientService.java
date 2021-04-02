package hu.gamf.szakdolgozatbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Patient;
import hu.gamf.szakdolgozatbackend.repository.PatientRepository;

import java.util.List;

@Service
public class PatientService extends UserService{
	
	private PatientRepository patientRepository;
	
	@Autowired
	public PatientService(PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}

	public Patient findExistEmailForUpdate(String email, Long id) {		
		return patientRepository.findExistEmailForUpdate(email, id);
	}

	public List<Patient> findAllPatientByPractitionerId(Long id){
		return patientRepository.findAllByPractitionerId(id);
	}

	public void savePatient(Patient patient){
		patientRepository.save(patient);
	}
	
}
