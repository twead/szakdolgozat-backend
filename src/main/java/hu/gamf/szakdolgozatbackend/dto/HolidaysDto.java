package hu.gamf.szakdolgozatbackend.dto;

public class HolidaysDto {

    private String slotMinTime;
    private String slotMaxTime;
    private int defaultTimePerClient;
    private boolean worksOnHoliday;

    public boolean isWorksOnHoliday() {
        return worksOnHoliday;
    }

    public void setWorksOnHoliday(boolean worksOnHoliday) {
        this.worksOnHoliday = worksOnHoliday;
    }

    public String getSlotMinTime() {
        return slotMinTime;
    }

    public void setSlotMinTime(String slotMinTime) {
        this.slotMinTime = slotMinTime;
    }

    public String getSlotMaxTime() {
        return slotMaxTime;
    }

    public void setSlotMaxTime(String slotMaxTime) {
        this.slotMaxTime = slotMaxTime;
    }

    public int getDefaultTimePerClient() {
        return defaultTimePerClient;
    }

    public void setDefaultTimePerClient(int defaultTimePerClient) {
        this.defaultTimePerClient = defaultTimePerClient;
    }
}
