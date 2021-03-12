package hu.gamf.szakdolgozatbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Role;
import hu.gamf.szakdolgozatbackend.enums.RoleName;


@Repository
public interface RoleRepository extends JpaRepository<Role, Short>{
	Optional<Role> findByRoleName(RoleName roleName);
}
