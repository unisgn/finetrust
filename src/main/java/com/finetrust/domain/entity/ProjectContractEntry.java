package com.finetrust.domain.entity;

import java.util.Date;

/**
 * Created by 0xFranCiS on Apr 06, 2015.
 */
public class ProjectContractEntry extends AuditableEntity {
    private Project project;
    private Date setupDate;
    private ContractStatus contractStatus = ContractStatus.BLANK;
    private String contractNo;
}
