package backend.Report;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/report")
@CrossOrigin("*")
public class ReportController {
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

    @GetMapping(path = "/{citytId}")
    ResponseEntity<ReportDto> getReportByCity(@PathVariable String cityId) {
        Report report = service.findReportByCityId(cityId);
        if (report == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "report not found!");
        }
        List<Report> cartProducts = getCartProductsByCartid(cartId);
        return new ResponseEntity<>(CartConvertor.toResponseDTO(cart, cartProducts), HttpStatus.OK);
    }

}
