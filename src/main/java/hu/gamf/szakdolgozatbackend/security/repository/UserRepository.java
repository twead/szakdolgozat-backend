package hu.gamf.szakdolgozatbackend.security.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.security.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	boolean existsByUsername(String username);
	Optional<User> findByActivation(String code);
	
	@Query(value = "select * from users join users_roles on users.id = user_id join roles on roles.id = role_id where roles.role_name = ?1", nativeQuery = true)
	List<User> findAllByRole(String role);
	
	@Query(value = "select * from users where username = ?1 and id != ?2", nativeQuery = true)
	User findExistUsernameForUpdate(String username,Long id);
	
	@Query(value = "select * from users join users_roles on users.id = user_id join roles on roles.id = role_id where roles.role_name = 'ROLE_PRACTITIONER' and users.username != ?1", nativeQuery = true)
	List<User> findAllPractitionerExceptMe(String username);
	
}
