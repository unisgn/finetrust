package com.finetrust.domain.entity;

import com.finetrust.lib.ProjectType;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
public class Project extends BusinessEntity {

    private ProjectType type;
    private ProductCategory category;
    private Customer customer;
    private float feeRate;
    private int estimateScale;
    private int duration;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date estimateSetupDate;

    private String contractNo;
    private String description;

    private Organization orgIntroducedBy;
    private Organization orgCreatedBy;
    private Organization orgOperatedBy;
    private Organization orgSupervisedBy;


    @Temporal(value = TemporalType.TIMESTAMP)
    private Date setupDate;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date onlineDate;
    private int onlineScale;
}
