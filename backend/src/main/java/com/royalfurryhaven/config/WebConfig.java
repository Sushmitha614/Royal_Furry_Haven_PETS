package com.royalfurryhaven.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurerWeb() { // <-- Renamed bean
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:3000", "http://localhost:3001")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }

            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
               registry.addResourceHandler("/uploads/products/**")
       .addResourceLocations("file:///D:/PC%20PROJECT/Royal_Furry_Haven_PETS_NEW/Royal_Furry_Haven_PETS/uploads/products/");
            }
        };
    }
}
