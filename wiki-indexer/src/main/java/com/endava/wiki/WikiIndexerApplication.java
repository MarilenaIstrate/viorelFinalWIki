package com.endava.wiki;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class WikiIndexerApplication extends SpringBootServletInitializer{

	@Override
	protected SpringApplicationBuilder configure (SpringApplicationBuilder application){
		return application.sources(WikiIndexerApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(WikiIndexerApplication.class, args);
	}
}
