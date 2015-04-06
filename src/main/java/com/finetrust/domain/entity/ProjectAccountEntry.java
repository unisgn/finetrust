package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectAccountEntry {
    private Project project;
    private Set<ProjectAccount> accounts = new HashSet<ProjectAccount>();
}
