package com.buraksenses.todoapp.security;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Bütün yollar için CORS ayarları
                .allowedOrigins("http://localhost:3000") // İzin verilen origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // İzin verilen metodlar
                .allowCredentials(true); // Cookie bilgilerinin dahil edilip edilmeyeceği
    }
}

