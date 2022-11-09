package com.supribull.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "productor")
public class Production {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produ", nullable=false, unique=true)
    private Long id;

    @Column(length = 30)
    private String produname;

    public Production() {
    }

    public Production(Long id, String produname) {
        this.id = id;
        this.produname = produname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduname() {
        return produname;
    }

    public void setProduname(String produname) {
        this.produname = produname;
    }

    @Override
    public String toString() {
        return "Production{" +
                "id=" + id +
                ", produname='" + produname + '\'' +
                '}';
    }
}

