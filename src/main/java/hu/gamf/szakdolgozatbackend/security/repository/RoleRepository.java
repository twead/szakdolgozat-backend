package hu.gamf.szakdolgozatbackend.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.security.entity.Role;
import hu.gamf.szakdolgozatbackend.security.enums.RoleName;


@Repository
public interface RoleRepository extends JpaRepository<Role, Short>{
	Optional<Role> findByRoleName(RoleName roleName);
}
