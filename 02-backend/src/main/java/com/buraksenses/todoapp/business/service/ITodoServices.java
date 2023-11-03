package com.buraksenses.todoapp.business.service;

import java.util.List;

public interface ITodoServices<E> {
    public E todoServiceCreate(E e);

    public E todoServiceFindById(Long id);

    public List<E> todoServiceFindAll();

    public E todoServiceUpdate(Long id, E e);

    public E todoDeleteById(Long id);
}
