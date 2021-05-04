package hu.gamf.szakdolgozatbackend.dto;

import javax.validation.constraints.NotBlank;

public class ForgotPasswordDto {

    @NotBlank
    String email;

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }
}
