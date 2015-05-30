package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectSupervisionItem extends AbstractEntity<Long> {
    private Project project;
    private String contentType;
    private String subject;
    private boolean automatic;
    private Set<ProjectSupervisionJournal> journals = new HashSet<ProjectSupervisionJournal>();
}
