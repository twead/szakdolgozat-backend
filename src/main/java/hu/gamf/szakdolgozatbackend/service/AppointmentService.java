package hu.gamf.szakdolgozatbackend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import hu.gamf.szakdolgozatbackend.dto.AppointmentDto;
import hu.gamf.szakdolgozatbackend.dto.HolidaysDto;
import hu.gamf.szakdolgozatbackend.dto.InstructionDto;
import hu.gamf.szakdolgozatbackend.entity.Practitioner;
import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.entity.Worktime;
import hu.gamf.szakdolgozatbackend.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.Appointment;
import hu.gamf.szakdolgozatbackend.repository.AppointmentRepository;

@Service
public class AppointmentService {
	
	private AppointmentRepository appointmentRepository;
	private PractitionerService practitionerService;
	private PatientService patientService;
	private UserService userService;
	private WorktimeService worktimeService;

	@Autowired
	public AppointmentService(AppointmentRepository appointmentRepository, PractitionerService practitionerService, PatientService patientService,
							  UserService userService, WorktimeService worktimeService) {
		this.appointmentRepository = appointmentRepository;
		this.practitionerService = practitionerService;
		this.patientService = patientService;
		this.userService = userService;
		this.worktimeService = worktimeService;
	}
	
	public void createAnAppointmentAndSave(String username, AppointmentDto appointmentDto) {
		User user = patientService.findUserByUsername(username)
				.orElseThrow(() -> new ApiRequestException("Nem található felhasználó"));

		if (existsAppointmentByTime(appointmentDto.getTime()))
			throw new ApiRequestException("Erre az időpontra nem foglalhatsz!");

		if (existsAppointmentByPatientIdAndPractitionerId(user.getId(),user.getPatient().getPractitionerId()))
			throw new ApiRequestException("Egyszerre egy orvosnál csak egy foglalásod lehet!");

		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId())
				.get();

		if (isTheDateAHolidayDate(appointmentDto.getTime()))
			throw new ApiRequestException("Nem foglalhatsz ünnepnapra!");

		Appointment appointment = new Appointment();
		appointment.setPatient(user.getPatient());
		appointment.setPractitioner(practitioner);
		appointment.setMessage(appointmentDto.getMessage());
		appointment.setTime(appointmentDto.getTime());
		saveAppointment(appointment);
	}

	private boolean isTheDateAHolidayDate(String date) {
		String[] holidays = {
				"01-01",
				"03-15",
				"05-01",
				"08-20",
				"10-23",
				"11-01",
				"12-24",
				"12-25",
		};

		for(int i=0; i<holidays.length; i++) {
			if(date.substring(5, 10).equals(holidays[i])) {
				return true;
			}
		}
		return false;
	}

	public List<InstructionDto> showPatientAppointmentsForInstruction(String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = findAllByPatientId(patient.getId());
		List<InstructionDto> instructionList = new ArrayList<>();

		for(Appointment appointment: appointments){
			InstructionDto instruction = new InstructionDto();
			instruction.setPractitionerName(appointment.getPractitioner().getUser().getPatient().getName());
			instruction.setTime(appointment.getTime());
			instructionList.add(instruction);
		}

		return instructionList;
	}

	public List<Appointment> showOthersAppointments(String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = findAllExceptTheActualPatient(patient.getId(),
				patient.getPatient().getPractitionerId());
		return appointments;
	}

	public List<Appointment> showPatientAppointments(String username) {
		User patient = patientService.findUserByUsername(username).get();
		List<Appointment> appointments = findAllByPatientIdAndPractitionerId(patient.getId(), patient.getPatient().getPractitionerId());
		return appointments;
	}

	public void updatePractitioner(String username, Long practitionerId) {
		User user = practitionerService.findUserByUsername(username).get();
		user.getPatient().setPractitionerId(practitionerId);
		practitionerService.saveUser(user);
	}

	public List<Worktime> getPractitionerWorkingTime(String username) {
		User user = userService.findUserByUsername(username).get();
		return user.getPractitioner().getWorktimes();
	}

	public void setPractitionerWorkingTime(String username, Worktime[] worktimes) {
		User user = userService.findUserByUsername(username).get();

		Worktime worktime;
		for (int i = 0; i < worktimes.length; i++) {

			if ((user.getPractitioner().getWorktimes()).size() < 5) {
				worktime = new Worktime();
				setTime(user, worktime, worktimes[i]);
			} else {
				worktime = user.getPractitioner().getWorktimes().get(i);
				setTime(user, worktime, worktimes[i]);
			}
		}
	}

	private void setTime(User user, Worktime worktime, Worktime worktimeDto ){
		worktime.setDay(worktimeDto.getDay());
		if (!worktimeDto.getFromTime().equals("")) {
			worktime.setFromTime(worktimeDto.getFromTime());
		}else worktime.setFromTime("0:00");
		if (!worktimeDto.getToTime().equals("")) {
			worktime.setToTime(worktimeDto.getToTime());
		}else worktime.setToTime("0:00");
		worktime.setPractitioner(user.getPractitioner());
		worktimeService.saveWorktime(worktime);
	}

	public void setHolidayWorks(String username, HolidaysDto worksOnHoliday) {
		User user = userService.findUserByUsername(username).get();
		if(user.equals(null))
			throw new ApiRequestException("Ez a felhasználó nem létezik");
		user.getPractitioner().setWorksOnHolidays(worksOnHoliday.isWorksOnHoliday());
		user.getPractitioner().setDefaultTimePerClient(worksOnHoliday.getDefaultTimePerClient());
		user.getPractitioner().setSlotMinTime(worksOnHoliday.getSlotMinTime());
		user.getPractitioner().setSlotMaxTime(worksOnHoliday.getSlotMaxTime());
		userService.saveUser(user);
	}

	public HolidaysDto getHolidayWorksForWorktimeSettings(String username) {
		User user = userService.findUserByUsername(username).get();
		HolidaysDto worksOnHolidays = new HolidaysDto();
		worksOnHolidays.setWorksOnHoliday(user.getPractitioner().getWorksOnHolidays());
		worksOnHolidays.setDefaultTimePerClient(user.getPractitioner().getDefaultTimePerClient());
		worksOnHolidays.setSlotMinTime(user.getPractitioner().getSlotMinTime());
		worksOnHolidays.setSlotMaxTime(user.getPractitioner().getSlotMaxTime());
		return worksOnHolidays;
	}

	public HolidaysDto getMyPractitionerHolidayWorksSetting(String username) {
		User user = userService.findUserByUsername(username).get();
		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId()).get();
		HolidaysDto worksOnHolidays = new HolidaysDto();
		worksOnHolidays.setWorksOnHoliday(practitioner.getWorksOnHolidays());
		worksOnHolidays.setDefaultTimePerClient(practitioner.getDefaultTimePerClient());
		worksOnHolidays.setSlotMinTime(practitioner.getSlotMinTime());
		worksOnHolidays.setSlotMaxTime(practitioner.getSlotMaxTime());
		return worksOnHolidays;
	}

	public List<Worktime> showPractitionerWorkingTime(String username) {
		User user = userService.findUserByUsername(username).get();
		Practitioner practitioner = practitionerService.findPractitionerById(user.getPatient().getPractitionerId()).get();
		List<Worktime> worktimes = practitioner.getWorktimes();
		return worktimes;
	}

	public void saveAppointment(Appointment appointment) {
		appointmentRepository.save(appointment);
	}

	public Optional<Appointment> findAppointmentById(Long appointmentId) {
		return appointmentRepository.findById(appointmentId);
	}

	public void deleteAppointmentById(Long appointmentId) {
		appointmentRepository.deleteById(appointmentId);
	}

	public List findAllByPatientIdAndPractitionerId(Long patientId, Long practitionerId) {
		return appointmentRepository.findAllByPatientIdAndPractitionerId(patientId, practitionerId);
	}

	public List findAllByPatientId(Long patientId) {
		return appointmentRepository.findAllByPatientId(patientId);
	}

	public List findAllExceptTheActualPatient(Long patientId, Long practitionerId) {
		return appointmentRepository.findAllExceptTheActualPatient(patientId, practitionerId);
	}

	public boolean existsAppointmentByTime(String time) {
		return appointmentRepository.existsByTime(time);
	}

	public boolean existsAppointmentByPatientIdAndPractitionerId(Long patientId, Long practitionerId) {
		return appointmentRepository.existsByPatientIdAndPractitionerId(patientId, practitionerId);
	}

	public void deleteAppointmentByPractitionerId(Long id) {
		appointmentRepository.deleteAllByPractitionerId(id);
	}

	public List<Appointment> findAllClientByPractitionerId(Long id) {
		return appointmentRepository.findAllByPractitionerIdOrderByTime(id);
	}

	public List<User> getAllPractitionerExceptMe(String username) {
		return practitionerService.findAllPractitionerExceptMe(username);
	}
}
