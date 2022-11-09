package com.supribull.model.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user_us")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", nullable= false, unique =true)
    private Long id;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String last_name;

    @Column(nullable = false, unique = true)
    private int i_code;

    private LocalDate birthDate;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Post> posts = new ArrayList<>();


    public User(Long idX, String nameX, String last_nameX, LocalDate birthDateX, String passwordX, int i_codeX) {
        this.id = idX;
        this.name = nameX;
        this.last_name = last_nameX;
        this.i_code = i_codeX;
        this.birthDate = birthDateX;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getI_code() {
        return i_code;
    }

    public void setI_code(int i_code) {
        this.i_code = i_code;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", i_code=" + i_code +
                ", birthDate=" + birthDate +
                ", posts=" + posts +
                '}';
    }
}



