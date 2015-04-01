package com.finetrust.repository;

import com.finetrust.util.ParamWrapper;

import java.io.Serializable;
import java.util.List;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public interface Repository<E, PK extends Serializable> {
    public List<E> getAll();
    public List<E> query(ParamWrapper conditions);
    public Serializable save(E entity);
    public E get(PK id);
    public void update(E entity);
    public void delete(E entity);

}
