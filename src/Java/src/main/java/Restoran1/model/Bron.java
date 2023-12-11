package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Бронь
 */
@Entity(name = "IISRestoran1Бронь")
@Table(schema = "public", name = "Бронь")
public class Bron {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодБрони")
    private Integer кодброни;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Stol")
    @Convert("Stol")
    @Column(name = "Стол", length = 16, unique = true, nullable = false)
    private UUID _stolid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Stol", insertable = false, updatable = false)
    private Stol stol;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Restoran")
    @Convert("Restoran")
    @Column(name = "Ресторан", length = 16, unique = true, nullable = false)
    private UUID _restoranid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Restoran", insertable = false, updatable = false)
    private Restoran restoran;

    @OneToMany(mappedBy = "bron", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Zapis> zapiss;

    @OneToMany(mappedBy = "bron", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazBlyuda> zakazblyudas;

    @OneToMany(mappedBy = "bron", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazNapitkov> zakaznapitkovs;


    public Bron() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодБрони() {
      return кодброни;
    }

    public void setКодБрони(Integer кодброни) {
      this.кодброни = кодброни;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }


}