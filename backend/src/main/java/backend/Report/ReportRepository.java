package backend.Report;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReportRepository extends ListCrudRepository<Report, UUID> {
}
