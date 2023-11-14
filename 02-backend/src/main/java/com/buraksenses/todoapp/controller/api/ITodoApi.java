package com.buraksenses.todoapp.controller.api;

import org.springframework.http.ResponseEntity;

//E: Entity
public interface ITodoApi<E>{
    // C R U D
    // CREATE
    public ResponseEntity<?> todoApiCreate(E e);

    // FIND
    public ResponseEntity<?> todoApiFindById(Long id);

    public ResponseEntity<?> todoApiFindAll();

    // UPDATE
    public ResponseEntity<?> todoApiUpdate(Long id, E e);

    // DELETE
    public ResponseEntity<?> todoApiDeleteById(Long id);

}
