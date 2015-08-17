package com.finetrust.repository.impl;

import com.finetrust.util.Filter;
import com.finetrust.util.ParamWrapper;
import com.finetrust.repository.Repository;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public abstract class RepositoryImpl<E extends Serializable, PK extends Serializable>
        extends HibernateDaoSupport implements Repository<E, PK> {
    private Class<E> cls;
    public RepositoryImpl() {
        this.cls = null;
        Type t = getClass().getGenericSuperclass();
        if (t instanceof ParameterizedType) {
            Type[] p = ((ParameterizedType) t).getActualTypeArguments();
            this.cls = (Class<E>) p[0];
        }
    }

    public E get(PK id) {
        return getHibernateTemplate().get(cls, id);
    }

    public List<E> getAll() {
        return getHibernateTemplate().loadAll(cls);
    }

    @SuppressWarnings(value = "unchecked")
    public List<E> query(ParamWrapper params) {
        if (params == null) {
            return getAll();
        } else {
            int start = params.getStart();
            int limit = params.getLimit();
            List<Filter> filters = params.getFilter();
            DetachedCriteria criteria = DetachedCriteria.forClass(cls);

            if (filters != null) {
                String type;
                String field;
                String value;
                String comparison;

                for (Filter filter : filters) {
                    field = filter.getField();
                    type = filter.getType();
                    value = filter.getValue();
                    comparison = filter.getComparison();

                    if ("string".equals(type)) {
                        criteria.add(Restrictions.ilike(field, value, MatchMode.ANYWHERE));
                    } else if ("numeric".equals(type)) {
                        if ("lt".equals(comparison)) {
                            criteria.add(Restrictions.lt(field, value));
                        } else if ("le".equals(comparison)) {
                            criteria.add(Restrictions.le(field, value));
                        } else if ("eq".equals(comparison)) {
                            criteria.add(Restrictions.eq(field, value));
                        } else if ("ge".equals(comparison)) {
                            criteria.add(Restrictions.ge(field, value));
                        } else if ("gt".equals(comparison)) {
                            criteria.add(Restrictions.gt(field, value));
                        }
                    }
                }
            }

            return (List<E>) getHibernateTemplate().findByCriteria(criteria, start, limit);
        }

    }

    public Serializable save(E entity) {
        return  getHibernateTemplate().save(entity);
    }

    public void update(E entity) {
        getHibernateTemplate().update(entity);
    }

    public void delete(E entity) {
        getHibernateTemplate().delete(entity);
    }
}
