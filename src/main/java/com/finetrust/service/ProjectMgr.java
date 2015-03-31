package com.finetrust.service;

import com.finetrust.domain.entity.Project;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public interface ProjectMgr {
    public long save(Project entity);
    public void update(Project eneitty);
}
