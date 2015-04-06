package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectOperationEntry extends AuditableEntity {
    private Project project;
    private Set<ProjectOperator> operators = new HashSet<ProjectOperator>();
}
