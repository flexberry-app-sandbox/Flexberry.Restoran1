package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IISRestoran1Запись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаписи")
    private Date датазаписи;

    @Column(name = "Время")
    private String время;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gosti")
    @Convert("Gosti")
    @Column(name = "Гости", length = 16, unique = true, nullable = false)
    private UUID _gostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gosti", insertable = false, updatable = false)
    private Gosti gosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Bron")
    @Convert("Bron")
    @Column(name = "Бронь", length = 16, unique = true, nullable = false)
    private UUID _bronid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Bron", insertable = false, updatable = false)
    private Bron bron;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаписи() {
      return датазаписи;
    }

    public void setДатаЗаписи(Date датазаписи) {
      this.датазаписи = датазаписи;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }


}