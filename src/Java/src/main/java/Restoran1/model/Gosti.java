package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Гости
 */
@Entity(name = "IISRestoran1Гости")
@Table(schema = "public", name = "Гости")
public class Gosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодГостя")
    private Integer кодгостя;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Телефон")
    private Integer телефон;


    public Gosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодГостя() {
      return кодгостя;
    }

    public void setКодГостя(Integer кодгостя) {
      this.кодгостя = кодгостя;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }


}