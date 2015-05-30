package com.finetrust.domain.entity;

import java.util.Date;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectSupervisionJournal extends AuditableEntity {
    private Date journalDate;
    private String content;
    private String memo;
}
