package com.finetrust.domain.entity;

import javax.persistence.MappedSuperclass;

/**
 * Created by 0xFranCiS on Apr 07, 2015.
 */
@MappedSuperclass
public class ProjectPart extends AuditableEntity {
    private Project project;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
