package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectSuperviseEntry {
    private Project project;
    private Set<ProjectSuperviseItem> items = new HashSet<ProjectSuperviseItem>();

}
