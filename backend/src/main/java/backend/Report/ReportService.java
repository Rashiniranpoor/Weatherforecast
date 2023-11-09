package backend.Report;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ReportService {

    private final ReportRepository repo;

    public ReportService(ReportRepository repo) {
        this.repo = repo;
    }

    public ReportDto createRepot(Report report) {
        report.setCreateDate(new Date().toString());
        report.setUpdateDate(new Date().toString());
        return ReportConvertor.toResponseDTO(repo.save(report));
    }

    public List<Report> findAllReportsByCityId(String cityId) {
        return repo.findReportsByCityId(cityId);
    }

    public List<CityInfoDTO> findAllReportsofCities(){
        return repo.findDistinctCityIdBy();
    }

    public void deleteReport (UUID reportId){
        repo.deleteById(reportId);
    }
}
