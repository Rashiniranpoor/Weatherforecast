package backend.Report;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Report {

    @Id
    @UuidGenerator
    private UUID id;

    private String temp;

    private Long humidity;

    private String weatherDescription;

    private Long realFeel;

   private String report;

   private String createDate;

    private String updateDate;

    private String weatherStatusDatetime;


    private String cityName;


    private String cityId;

    public Report() {

    }

    public Report( String temp, Long humidity, String weatherDescription, Long realFeel, String report, String createDate, String updateDate, String weatherStatusDatetime, String cityName, String cityId) {

        this.temp = temp;
        this.humidity = humidity;
        this.weatherDescription = weatherDescription;
        this.realFeel = realFeel;
        this.report = report;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.weatherStatusDatetime = weatherStatusDatetime;
        this.cityName = cityName;
        this.cityId = cityId;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String temp) {
        this.temp = temp;
    }

    public Long getHumidity() {
        return humidity;
    }

    public void setHumidity(Long humidity) {
        this.humidity = humidity;
    }

    public String getWeatherDescription() {
        return weatherDescription;
    }

    public void setWeatherDescription(String weatherDescription) {
        this.weatherDescription = weatherDescription;
    }

    public Long getRealFeel() {
        return realFeel;
    }

    public void setRealFeel(Long realFeel) {
        this.realFeel = realFeel;
    }

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public String getWeatherStatusDatetime() {
        return weatherStatusDatetime;
    }

    public void setWeatherStatusDatetime(String weatherStatusDatetime) {
        this.weatherStatusDatetime = weatherStatusDatetime;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getCityId() {
        return cityId;
    }

    public void setCityId(String cityId) {
        this.cityId = cityId;
    }
}
