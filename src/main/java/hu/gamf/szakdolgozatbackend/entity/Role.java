package hu.gamf.szakdolgozatbackend.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import hu.gamf.szakdolgozatbackend.enums.RoleName;


@Entity
@Table(name = "roles")
public class Role implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short id;
	@NotNull
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private RoleName roleName;
	
	public Role() {
	}

	public Role(@NotNull RoleName roleName) {
		this.roleName = roleName;
	}

	public short getId() {
		return id;
	}

	public void setId(short id) {
		this.id = id;
	}

	public RoleName getRoleName() {
		return roleName;
	}

	public void setRoleName(RoleName roleName) {
		this.roleName = roleName;
	}
	
}
