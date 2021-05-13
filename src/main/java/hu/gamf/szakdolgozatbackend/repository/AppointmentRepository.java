package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

	List<Appointment> findAllByPatientIdAndPractitionerId(Long patientId, Long practitionerId);

	List<Appointment> findAllByPatientId(Long patientId);
	
	@Query(value = "select * from appointments where patient_id != ?1 and practitioner_id = ?2", nativeQuery = true)
	List<Appointment> findAllExceptTheActualPatient(Long patientId, Long practitionerId);
	
	boolean existsByTimeAndPractitionerId(String time, Long practitionerId);
	
	boolean existsByPatientIdAndPractitionerId(Long patientId, Long practitionerId);
	
	void deleteAllByPractitionerId(Long id);

	List<Appointment> findAllByPractitionerIdOrderByTime(Long id);
}
