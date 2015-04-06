package com.finetrust.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@Entity
public class Project extends BusinessEntity {

    // project base info
    private float feeRate;
    private int estimateScale;
    private int duration;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date estimateSetupDate;

    private String description;


    /**
     * Redundancy Info for Project Contract
     */
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date setupDate;
    private ContractStatus contractStatus;
    private String contractNo;

    /**
     * Redundancy Info for Project Online
     */
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date onlineDate;
    private int onlineScale;


    /**
     * Redundancy Info for Project Operation Assignment
     */
    private String assetCode;
    private String accountBookNo;

    public float getFeeRate() {
        return feeRate;
    }

    public void setFeeRate(float feeRate) {
        this.feeRate = feeRate;
    }

    public int getEstimateScale() {
        return estimateScale;
    }

    public void setEstimateScale(int estimateScale) {
        this.estimateScale = estimateScale;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Date getEstimateSetupDate() {
        return estimateSetupDate;
    }

    public void setEstimateSetupDate(Date estimateSetupDate) {
        this.estimateSetupDate = estimateSetupDate;
    }

    public String getContractNo() {
        return contractNo;
    }

    public void setContractNo(String contractNo) {
        this.contractNo = contractNo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getSetupDate() {
        return setupDate;
    }

    public void setSetupDate(Date setupDate) {
        this.setupDate = setupDate;
    }

    public Date getOnlineDate() {
        return onlineDate;
    }

    public void setOnlineDate(Date onlineDate) {
        this.onlineDate = onlineDate;
    }

    public int getOnlineScale() {
        return onlineScale;
    }

    public void setOnlineScale(int onlineScale) {
        this.onlineScale = onlineScale;
    }
}
