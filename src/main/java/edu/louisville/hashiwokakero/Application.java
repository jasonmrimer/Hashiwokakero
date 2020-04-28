package edu.louisville.hashiwokakero;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
  scanBasePackages = {
    "edu.louisville.hashiwokakero.graphs",
    "edu.louisville.hashiwokakero.maps",
    "edu.louisville.hashiwokakero.genetics",
    "edu.louisville.hashiwokakero.crowds",
    "edu.louisville.hashiwokakero.hashi",
  }
)
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

}
