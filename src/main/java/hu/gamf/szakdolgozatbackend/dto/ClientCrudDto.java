package hu.gamf.szakdolgozatbackend.dto;

public class ClientCrudDto {

    private Long appointmentId;
    private String clientName;
    private String time;
    private String message;

    public Long getAppointmentId() { return appointmentId; }

    public void setAppointmentId(Long appointmentId) { this.appointmentId = appointmentId; }

    public String getClientName() { return clientName; }

    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getTime() { return time; }

    public void setTime(String time) { this.time = time; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }
}
