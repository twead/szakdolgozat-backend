package hu.gamf.szakdolgozatbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Practitioner;

@Repository
public interface PractitionerRepository extends JpaRepository<Practitioner, Long>{

	@Query(value = "select * from practitioner where practitioner.email = ?1 and practitioner.id != ?2", nativeQuery = true)
	Practitioner findExistEmailForUpdate(String email, Long id);
	
}
