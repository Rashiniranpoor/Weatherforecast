package backend.Report;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/report")
@CrossOrigin("*")
public class ReportController {
  @GetMapping
    public ResponseEntity<String> getAll(){
      return ResponseEntity.ok("good");
  }


        /*

          private final ReportService service;

    public ReportController(ReportService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<ReportDto> createReport(@RequestBody Report request) {
        ReportDto dto = service.createRepot(request);
        if (dto != null)
            return ResponseEntity.accepted().body(dto);
        else
            return ResponseEntity.badRequest().build();
    }


    @GetMapping( path="/{cityId}")
    public ResponseEntity<List<ReportDto>> getReportByCity(@PathVariable String cityId) {
        List<Report> reports = service.findAllReportsByCityId(cityId);
        if (reports == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "report not found!");
        }
        return ResponseEntity.ok().body(ReportConvertor.toResponseListDTO(reports));
    }

    @GetMapping( path="/all")
    public ResponseEntity<List<ReportDto>> getAllReports() {
        List<Report> reports = service.findAll();
        if (reports == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "report not found!");
        }
        return ResponseEntity.ok().body(ReportConvertor.toResponseListDTO(reports));
    }

    @GetMapping( path="/")
    public ResponseEntity<List<CityInfoDTO>> getAllReportsOfCities() {
        List<CityInfoDTO> cities = service.findAllReportsofCities();
        if (cities == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "report not found!");
        }
        return ResponseEntity.ok().body(cities);
    }

    @DeleteMapping(path = "/{reportId}")
    ResponseEntity<Void> deleteCart(@PathVariable UUID reportId) {
        service.deleteReport(reportId);
        return ResponseEntity.noContent().build();
    }
*/
}
