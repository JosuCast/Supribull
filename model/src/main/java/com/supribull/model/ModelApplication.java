package com.supribull.model;

import com.supribull.model.repository.PostRepository;
import com.supribull.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class ModelApplication {


	//private UserRepository userRepository;
	//private PostRepository postRepository;

	public static void main(String[] args) {
		SpringApplication.run(ModelApplication.class, args);
	}

	//public ModelApplication(@Qualifier("coponentTwoImplement") UserRepository ur, PostRepository pr){
		//this.userRepository = ur;
		//this.postRepository = pr;
	//}
}
