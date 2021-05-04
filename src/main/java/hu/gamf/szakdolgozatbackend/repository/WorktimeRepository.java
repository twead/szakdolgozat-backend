package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Worktime;

@Repository
public interface WorktimeRepository extends CrudRepository<Worktime, Long> {
	List<Worktime> findAllByPractitionerId(Long id);
	void deleteAllByPractitionerId(Long id);
}
