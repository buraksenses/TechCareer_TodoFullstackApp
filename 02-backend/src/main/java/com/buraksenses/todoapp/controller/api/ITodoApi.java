package com.buraksenses.todoapp.controller.api;

import org.springframework.http.ResponseEntity;

//E: Entity
public interface ITodoApi<E>{
    // C R U D
    // CREATE
    public ResponseEntity<?> registerApiCreate(E e);

    // FIND
    public ResponseEntity<?> registerApiFindById(Long id);

    public ResponseEntity<?> registerApiFindAll();

    // UPDATE
    public ResponseEntity<?> registerApiUpdate(Long id, E e);

    // DELETE
    public ResponseEntity<?> registerApiDeleteById(Long id);

}
