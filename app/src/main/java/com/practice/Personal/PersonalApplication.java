package com.practice.Personal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
public class PersonalApplication {

    public static void main(String[] args) {
        SpringApplication.run(PersonalApplication.class, args);
    }

    @GetMapping("/hello")
    public Object practice(){
        Map<String, Object> response = new HashMap<>();
        response.put("name", "Sathiya");
        response.put("age", 25);
        return response;
    }
}
