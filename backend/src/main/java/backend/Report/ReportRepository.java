package backend.Report;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReportRepository extends ListCrudRepository<Report, UUID> {

    @Query("SELECT rp FROM Report rp WHERE rp.cityId = :cityId")
    List<Report> findReportsByCityId(String cityId);

    List<CityInfoDTO> findDistinctCityIdBy();

}


