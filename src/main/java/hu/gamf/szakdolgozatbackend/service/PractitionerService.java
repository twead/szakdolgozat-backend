package hu.gamf.szakdolgozatbackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Practitioner;
import hu.gamf.szakdolgozatbackend.repository.PractitionerRepository;

@Service
public class PractitionerService extends UserService{
	
	private PractitionerRepository practitionerRepository;
	
	@Autowired	
	public PractitionerService(PractitionerRepository practitionerRepository) {
		this.practitionerRepository = practitionerRepository;
	}

	public Optional<Practitioner> findPractitionerById(Long id) {
		return practitionerRepository.findById(id);
	}
	
	public void save(Practitioner practitioner) {
		practitionerRepository.save(practitioner);		
	}
	
}
