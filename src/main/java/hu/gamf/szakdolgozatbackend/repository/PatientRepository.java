package hu.gamf.szakdolgozatbackend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Patient;

import java.util.List;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {
	boolean existsByEmail(String email);
	Patient findByEmail(String email);
	
	@Query(value = "select * from patients where patients.email = ?1 and patients.id != ?2", nativeQuery = true)
	Patient findExistEmailForUpdate(String email, Long id);

	List<Patient> findAllByPractitionerId(Long id);
}
