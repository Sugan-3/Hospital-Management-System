package com.excelr.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Apply to all API endpoints
                .allowedOrigins("http://localhost:5173") // Allow the React app
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow the PUT method
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // If you're using cookies, authentication, etc.
    }
}
