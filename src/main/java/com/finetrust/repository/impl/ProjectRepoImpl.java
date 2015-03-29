package com.finetrust.repository.impl;

import com.finetrust.domain.entity.Project;
import com.finetrust.repository.ProjectRepo;
import org.springframework.stereotype.Repository;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
@Repository
public class ProjectRepoImpl extends RepositoryImpl<Project, Long> implements ProjectRepo {
}
