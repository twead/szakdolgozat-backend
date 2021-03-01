package hu.gamf.szakdolgozatbackend.security.entity;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails{
	
	private String username;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	
	private boolean isEnabled;
	

	public UserPrincipal(String username, String password,
			Collection<? extends GrantedAuthority> authorities, boolean isEnabled) {
		this.username = username;
		this.password = password;
		this.authorities = authorities;
		this.isEnabled = isEnabled;
	}
	
	public static UserPrincipal build(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getRoleName().name())).collect(Collectors.toList());
		return new UserPrincipal(user.getUsername(), user.getPassword(), authorities, user.isEnabled());
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return isEnabled;
	}
	
}
