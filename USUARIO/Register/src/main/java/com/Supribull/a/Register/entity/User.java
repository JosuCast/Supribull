package com.Supribull.a.Register.entity;

import javax.persistence.*;
import java.time.LocalDate;

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", nullable= false, unique =true)
    private int id;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String last_name;

    @Column(length = 100)
    private String email;

    @Column(length = 50)
    private String password;


    private LocalDate birthDate;


    public User(int idX, String nameX, String last_nameX, LocalDate birthDateX, String passwordX) {
        this.id = idX;
        this.name = nameX;
        this.last_name = last_nameX;
        this.birthDate = birthDateX;
        this.password = passwordX;
    }

    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getLast_Name() {
        return last_name;
    }

    public void setLast_Name(String last_name){
        this.last_name = last_name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate){
        this.birthDate = birthDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}



