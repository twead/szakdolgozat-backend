package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	public List<Appointment> findAllByPatientId(Long id);
}
