package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаказНапитков
 */
@Entity(name = "IISRestoran1ЗаказНапитков")
@Table(schema = "public", name = "ЗаказНапитков")
public class ZakazNapitkov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Комментраий")
    private String комментраий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Napitki")
    @Convert("Napitki")
    @Column(name = "Напитки", length = 16, unique = true, nullable = false)
    private UUID _napitkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Napitki", insertable = false, updatable = false)
    private Napitki napitki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Bron")
    @Convert("Bron")
    @Column(name = "Бронь", length = 16, unique = true, nullable = false)
    private UUID _bronid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Bron", insertable = false, updatable = false)
    private Bron bron;


    public ZakazNapitkov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКомментраий() {
      return комментраий;
    }

    public void setКомментраий(String комментраий) {
      this.комментраий = комментраий;
    }


}