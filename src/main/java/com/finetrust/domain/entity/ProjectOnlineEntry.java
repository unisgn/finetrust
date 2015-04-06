package com.finetrust.domain.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Apr 06, 2015.
 */
public class ProjectOnlineEntry extends AuditableEntity {
    private Project project;
    private Date onlineDate;
    private float onlineScale;
    Set<ProjectOnlineContact> contacts = new HashSet<ProjectOnlineContact>();
}
