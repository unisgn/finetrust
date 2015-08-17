package com.finetrust.domain.entity;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

/**
 * Created by 0xFranCiS on Jul 04, 2015.
 */
public class ProjectBase {
    private float feeRate;
    private int estimateScale;
    private int duration;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date estimateSetupDate;

    private String description;
}
