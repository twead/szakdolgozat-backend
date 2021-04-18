package hu.gamf.szakdolgozatbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Patient;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{
	boolean existsByEmail(String email);
	Patient findByEmail(String email);
	
	@Query(value = "select * from patient where patient.email = ?1 and patient.id != ?2", nativeQuery = true)
	Patient findExistEmailForUpdate(String email, Long id);

	List<Patient> findAllByPractitionerId(Long id);
}
