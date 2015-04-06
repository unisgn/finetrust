package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectOperatorAssignment {
    private Project project;
    private String assetCode;
    private String accountNo;
    private Set<ProjectOperator> operators = new HashSet<ProjectOperator>();
}
