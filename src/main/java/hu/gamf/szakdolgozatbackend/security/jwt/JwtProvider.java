package hu.gamf.szakdolgozatbackend.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import hu.gamf.szakdolgozatbackend.security.entity.UserPrincipal;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtProvider {

	private final static Logger logger = (Logger) LoggerFactory.getLogger(JwtProvider.class);
	
	@Value("${jwt.secret}")
	private String secret;
	
	@Value("${jwt.expiration}")
	private int expiration;
	
	public String generateToken(Authentication authentication) {
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		return Jwts.builder().setSubject(userPrincipal.getUsername())
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+expiration*10))//10 days
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
	
	public String getUserNameFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
	}
	
	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
			return true;
			
		} catch (MalformedJwtException e) {
			logger.error("Token badly formed");
		}catch (UnsupportedJwtException e) {
			logger.error("Token not supported");
		}catch (ExpiredJwtException e) {
			logger.error("Token expired");
		}catch (IllegalArgumentException e) {
			logger.error("Token is empty");
		}catch (SignatureException e) {
			logger.error("Fail at the signature");
		}
		
		return false;	
	}
	
}
