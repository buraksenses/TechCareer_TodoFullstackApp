package com.buraksenses.todoapp.business.service;

public interface ITodoServices<E> {
    public E todoServiceCreate(E e);

    public E todoServiceFindById(Long id);

    public E todoServiceUpdate(Long id, E e);

    public E todoDeleteById(Long id);
}
