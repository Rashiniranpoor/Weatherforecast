package backend.Report;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

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



}
