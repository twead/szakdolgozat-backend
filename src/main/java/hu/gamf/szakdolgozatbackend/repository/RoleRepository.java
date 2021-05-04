package hu.gamf.szakdolgozatbackend.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.gamf.szakdolgozatbackend.entity.Role;
import hu.gamf.szakdolgozatbackend.enums.RoleName;

@Repository
public interface RoleRepository extends CrudRepository<Role, Short> {
	Optional<Role> findByRoleName(RoleName roleName);
}
