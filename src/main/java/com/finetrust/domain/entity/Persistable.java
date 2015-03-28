package com.finetrust.domain.entity;

import java.io.Serializable;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public interface Persistable<ID extends Serializable> extends Serializable {
    ID getId();
    boolean isNew();
}
