package backend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Report {

    @Id
    @UuidGenerator
    private UUID id;


   private String report;

   private String createdDate;

   private boolean isActive;
}
