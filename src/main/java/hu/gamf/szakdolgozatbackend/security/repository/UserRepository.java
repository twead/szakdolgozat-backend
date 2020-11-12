package hu.gamf.szakdolgozatbackend.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.security.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	boolean existsByUsername(String username);
	boolean existsByEmail(String email);
	@Query(value = "select * from users inner join user_profile on users.user_profile_id = user_profile.id where user_profile.activation = ?1", nativeQuery = true)
	Optional<User> findByActivation(String code);
}
