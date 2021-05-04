package hu.gamf.szakdolgozatbackend.dto;

import javax.validation.constraints.NotBlank;

public class InstructionDto {

    @NotBlank
    private String practitionerName;
    @NotBlank
    private String time;

    public String getPractitionerName() {
        return practitionerName;
    }

    public void setPractitionerName(String practitionerName) {
        this.practitionerName = practitionerName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}
