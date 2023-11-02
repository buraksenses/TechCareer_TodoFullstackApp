package com.buraksenses.todoapp.data.repository;

import com.buraksenses.todoapp.data.entity.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository<Todo,Long> {
}
