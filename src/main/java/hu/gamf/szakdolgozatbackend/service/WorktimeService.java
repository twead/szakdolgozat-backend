package hu.gamf.szakdolgozatbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Worktime;
import hu.gamf.szakdolgozatbackend.repository.WorktimeRepository;

@Service
public class WorktimeService {

	private WorktimeRepository worktimeRepository;
	
	@Autowired
	public WorktimeService(WorktimeRepository worktimeRepository) {
		this.worktimeRepository = worktimeRepository;
	}

	public void saveAllWorktime(List<Worktime> workingTimePerDay) {
		worktimeRepository.saveAll(workingTimePerDay);
	}

	public List<Worktime> findAllWorktimeByPractitionerId(Long practitionerId) {
		return worktimeRepository.findAllByPractitionerId(practitionerId);
	}

	public void deleteAllWorktimeByPractitionerId(Long practitionerId) {
		worktimeRepository.deleteAllByPractitionerId(practitionerId);
	}
	
}
