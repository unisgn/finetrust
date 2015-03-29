package com.finetrust.repository;

import java.io.Serializable;
import java.util.List;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public interface Repository<E, PK extends Serializable> {
    public E get(PK id);
    public List<E> getAll();
    public Serializable save(E entity);
    public void delete(E entity);
}
