package hu.gamf.szakdolgozatbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.User;

@Service
public class EmailService {
	
	@Value("${url}")
	private String Url;
	
	private JavaMailSender javaMailSender;

	@Autowired
	public EmailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendActivationEmail(User user) throws MailException {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getPatient().getEmail());
		mail.setFrom("onlinehealthcaresystem@email.com");
		mail.setSubject("Sikeres regisztráció!");
		mail.setText("Kedves " + user.getPatient().getName()
				+ "! \n \nKöszönjük, hogy regisztráltál az oldalunkra!\n\n"
				+ "Kérlek kattints a linkre profilod aktiválásához: " + Url + "auth/activation/"
				+ user.getActivation());
		
		javaMailSender.send(mail);
	}

}
