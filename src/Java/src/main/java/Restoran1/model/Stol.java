package Restoran1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Restoran1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Стол
 */
@Entity(name = "IISRestoran1Стол")
@Table(schema = "public", name = "Стол")
public class Stol {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерСтола")
    private Integer номерстола;

    @Column(name = "КолвоМест")
    private Integer колвомест;

    @Column(name = "Статус")
    private String статус;


    public Stol() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерСтола() {
      return номерстола;
    }

    public void setНомерСтола(Integer номерстола) {
      this.номерстола = номерстола;
    }

    public Integer getКолвоМест() {
      return колвомест;
    }

    public void setКолвоМест(Integer колвомест) {
      this.колвомест = колвомест;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}