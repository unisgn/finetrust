package com.finetrust.repository.impl;

import com.finetrust.repository.Repository;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public class RepositoryImpl<E extends Serializable, PK extends Serializable> extends HibernateDaoSupport implements Repository<E, PK> {
    private Class<E> clazz;
    public RepositoryImpl() {
        this.clazz = null;
        Class c = getClass();
        Type t = c.getGenericSuperclass();
        if (t instanceof ParameterizedType) {
            Type[] p = ((ParameterizedType) t).getActualTypeArguments();
            this.clazz = (Class<E>) p[0];
        }
    }

    public E get(PK id) {
        return getHibernateTemplate().get(clazz, id);
    }

    public List<E> getAll() {
        return getHibernateTemplate().loadAll(clazz);
    }

    public Serializable save(E entity) {
        return  getHibernateTemplate().save(entity);
    }

    public void delete(E entity) {
        getHibernateTemplate().delete(entity);
    }
}
