package hu.gamf.szakdolgozatbackend.dto;

import javax.validation.constraints.NotBlank;

public class UpdatePasswordDto {

    @NotBlank
    private String password;

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }
}
