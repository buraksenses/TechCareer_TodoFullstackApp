package com.buraksenses.todoapp.data.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "task")
    private String task;
}
