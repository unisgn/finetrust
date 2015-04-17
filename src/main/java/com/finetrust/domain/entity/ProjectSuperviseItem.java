package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectSuperviseItem extends AbstractEntity<Long> {
    private Project project;
    private String content;
    private String subject;
    private boolean automatic;
    private Set<ProjectSuperviseJournal> journals = new HashSet<ProjectSuperviseJournal>();
}
