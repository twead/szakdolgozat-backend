package hu.gamf.szakdolgozatbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Practitioner;

@Repository
public interface PractitionerRepository extends JpaRepository<Practitioner, Long>{
	
}
