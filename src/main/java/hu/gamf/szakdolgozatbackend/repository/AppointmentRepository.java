package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	public List<Appointment> findAllByPatientIdAndPractitionerId(Long id, Long pracId); 
	
	@Query(value = "select * from appointment where patient_id != ?1 and practitioner_id = ?2", nativeQuery = true)
	public List<Appointment> findAllByPractitionerId(Long patientId, Long practitionerId);
}
