package hu.gamf.szakdolgozatbackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Practitioner;

@Repository
public interface PractitionerRepository extends CrudRepository<Practitioner, Long> {
    Practitioner findByUserId(Long id);
    boolean existsByUserId(Long id);
}
