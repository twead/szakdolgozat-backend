package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	public List<Appointment> findAllByPatientIdAndPractitionerId(Long patientId, Long practitionerId);

	public List<Appointment> findAllByPatientId(Long patientId);
	
	@Query(value = "select * from appointment where patient_id != ?1 and practitioner_id = ?2", nativeQuery = true)
	public List<Appointment> findAllExceptTheActualPatient(Long patientId, Long practitionerId);
	
	public boolean existsByTime(String time);
	
	public boolean existsByPatientIdAndPractitionerId(Long patientId, Long practitionerId);
	
	public void deleteAllByPractitionerId(Long id);

	public List<Appointment> findAllByPractitionerId(Long id);
}
