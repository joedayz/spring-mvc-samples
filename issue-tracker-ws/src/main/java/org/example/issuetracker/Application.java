package org.example.issuetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import be.ordina.msdashboard.EnableMicroservicesDashboardServer;


@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableMicroservicesDashboardServer
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
