package com.supribull.model.entity;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_post", nullable=false, unique=true)
    private Long id;


    @ManyToOne
    private User user;

    @Column(length = 8000)
    private String written_text;


    private LocalDate postdate;

    public Post(Long idp, User iduserp, String wtp, LocalDate pdt){
        this.id = idp;
        this.user = iduserp;
        this.written_text = wtp;
        this.postdate = pdt;
    }

    public Post() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getWritten_text() {
        return written_text;
    }

    public void setWritten_text(String written_text) {
        this.written_text = written_text;
    }

    public LocalDate getPostdate() {
        return postdate;
    }

    public void setPostdate(LocalDate postdate) {
        this.postdate = postdate;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", user=" + user +
                ", written_text='" + written_text + '\'' +
                ", postdate=" + postdate +
                '}';
    }
}
