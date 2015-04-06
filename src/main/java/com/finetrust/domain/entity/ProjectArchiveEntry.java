package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectArchiveEntry extends AuditableEntity {
    private Project project;
    private Set<ProjectArchiveItem> items = new HashSet<ProjectArchiveItem>();
}
