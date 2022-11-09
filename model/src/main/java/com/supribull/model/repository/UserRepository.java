package com.supribull.model.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.supribull.model.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
