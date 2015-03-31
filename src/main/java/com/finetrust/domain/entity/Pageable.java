package com.finetrust.domain.entity;

import java.io.Serializable;

/**
 * Created by 0xFranCiS on Mar 31, 2015.
 */
public interface Pageable {
    public Serializable getPage();
    public Serializable getStart();
    public Serializable getLimit();
    public void setPage(Serializable page);
    public void setStart(Serializable start);
    public void setLimit(Serializable limit);
}
