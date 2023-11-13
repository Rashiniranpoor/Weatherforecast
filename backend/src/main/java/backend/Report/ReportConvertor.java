package backend.Report;

import java.util.ArrayList;
import java.util.List;

/*
public class ReportConvertor {
    static ReportDto toResponseDTO(Report entity) {
        return new ReportDto(entity.getId(), entity.getTemp(),
                entity.getHumidity(), entity.getWeatherDescription()
        ,entity.getRealFeel(),entity.getReport(),entity.getCreateDate()
        ,entity.getUpdateDate(),entity.getWeatherStatusDatetime()
        ,entity.getCityName(),entity.getCityId());
    }

    static List<ReportDto> toResponseListDTO(List<Report> reportsEntity) {
        List<ReportDto> responseDto = new ArrayList<>();
        if (reportsEntity == null || reportsEntity.isEmpty()) {
            return responseDto;
        }
        for (Report entity : reportsEntity) {
            responseDto.add(new ReportDto(entity.getId(), entity.getTemp(),
                    entity.getHumidity(), entity.getWeatherDescription()
                    ,entity.getRealFeel(),entity.getReport(),entity.getCreateDate()
                    ,entity.getUpdateDate(),entity.getWeatherStatusDatetime()
            ,entity.getCityName(),entity.getCityId()));
        }
        return responseDto;
    }

    static Report toReport(ReportDto entity) {
        Report response = new Report();
        if (response == null) {
            return response;
        }
        return new Report(entity.temp(), entity.humidity(),
                    entity.weatherDescription()
                    ,entity.realFeel(),entity.report(),entity.createDate()
                    ,entity.updateDate(),entity.weatherStatusDatetime()
        ,entity.cityName(),entity.cityId());
    }
}

 */
