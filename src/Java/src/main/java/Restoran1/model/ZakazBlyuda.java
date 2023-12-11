package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаказБлюда
 */
@Entity(name = "IISRestoran1ЗаказБлюда")
@Table(schema = "public", name = "ЗаказБлюда")
public class ZakazBlyuda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Blyuda")
    @Convert("Blyuda")
    @Column(name = "Блюда", length = 16, unique = true, nullable = false)
    private UUID _blyudaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Blyuda", insertable = false, updatable = false)
    private Blyuda blyuda;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Bron")
    @Convert("Bron")
    @Column(name = "Бронь", length = 16, unique = true, nullable = false)
    private UUID _bronid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Bron", insertable = false, updatable = false)
    private Bron bron;


    public ZakazBlyuda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}