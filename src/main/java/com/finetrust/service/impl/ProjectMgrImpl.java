package com.finetrust.service.impl;

import com.finetrust.domain.entity.Project;
import com.finetrust.repository.ProjectRepo;
import com.finetrust.service.ProjectMgr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
@Service
public class ProjectMgrImpl implements ProjectMgr {
    @Autowired
    private ProjectRepo repo;

    @Transactional
    public Long save(Project entity) {
        return (Long) repo.save(entity);
    }

}
