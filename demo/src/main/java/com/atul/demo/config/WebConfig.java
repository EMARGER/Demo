package com.atul.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Project image path mapping
        registry.addResourceHandler("/project/**")
                .addResourceLocations("file:///F:/demo-backend/demo/storage/project/");
        registry.addResourceHandler("/client/**")
        .addResourceLocations("file:///F:/demo-backend/demo/storage/client/");
    }
    
}
