package com.buraksenses.todoapp.controller.api.impl;

import com.buraksenses.todoapp.business.service.ITodoServices;
import com.buraksenses.todoapp.controller.api.ITodoApi;
import com.buraksenses.todoapp.data.entity.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoApiImpl implements ITodoApi<Todo> {

    private final ITodoServices iTodoServices;

    @Override
    @PostMapping("/todos")
    public ResponseEntity<?> registerApiCreate(@RequestBody Todo todo) {
        return ResponseEntity.ok(iTodoServices.todoServiceCreate(todo));
    }

    @Override
    @GetMapping("/todos/{id}")
    public ResponseEntity<?> registerApiFindById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok().body(iTodoServices.todoServiceFindById(id));
    }

    @Override
    @GetMapping("/todos")
    public ResponseEntity<?> registerApiFindAll() {
        return ResponseEntity.ok().body(iTodoServices.todoServiceFindAll());
    }

    @Override
    @PutMapping("/todos/{id}")
    public ResponseEntity<?> registerApiUpdate(@PathVariable(name = "id") Long id, @RequestBody Todo todo) {
        return ResponseEntity.status(200).body(iTodoServices.todoServiceUpdate(id,todo));
    }

    @Override
    @DeleteMapping("/todos/{id}")
    public ResponseEntity<?> registerApiDeleteById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.status(200).body(iTodoServices.todoDeleteById(id));
    }
}
