package com.buraksenses.todoapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Resource404NotFoundException extends RuntimeException{
    public Resource404NotFoundException(String message) {
        super(message);
    }
}
