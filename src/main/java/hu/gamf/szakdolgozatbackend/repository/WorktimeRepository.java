package hu.gamf.szakdolgozatbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Worktime;

@Repository
public interface WorktimeRepository extends JpaRepository<Worktime, Long>{
	public List<Worktime> findAllByPractitionerId(Long id);
	public void deleteAllByPractitionerId(Long id);
}
