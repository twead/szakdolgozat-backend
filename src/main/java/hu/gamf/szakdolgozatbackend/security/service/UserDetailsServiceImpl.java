package hu.gamf.szakdolgozatbackend.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import hu.gamf.szakdolgozatbackend.entity.User;
import hu.gamf.szakdolgozatbackend.security.entity.UserPrincipal;
import hu.gamf.szakdolgozatbackend.service.UserService;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private UserService userService;

	@Autowired
	public UserDetailsServiceImpl(UserService userService) {
		this.userService = userService;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findUserByUsername(username).get();
		return UserPrincipal.build(user);
	}

}
