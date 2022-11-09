package com.supribull.model.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.supribull.model.entity.Post;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
