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

    public enum ProjectType {
        TRADITIONAL,
        FASHION;
    }

    /**
     * ==================
     * Project Basic Info
     * ==================
     */
    private float feeRate;
    private int estimateScale;
    private int duration;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date estimateSetupDate;

    private String description;


    /**
     * ==========================
     * Project Contract reference
     * ==========================
     */
    private int contractEntryStatus;
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date setupDate;
    private ContractStatus contractStatus;
    private String contractNo;

    /**
     * ========================
     * Project Online reference
     * ========================
     */
    private int onlineEntryStatus;
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date onlineDate;
    private float onlineScale;


    /**
     * =====================================
     * Project Operator Assignment reference
     * =====================================
     */
    private int operatorEntryStatus;
    private String assetCode;
    private String accountBookNo;

    /**
     * ================================
     * Project Operation info reference
     * ================================
     */
    private int operationEntryStatus;


    /**
     * ==========================
     * Project Accounts reference
     * ==========================
     */
    private int accountEntryStatus;


    /**
     * ===========================
     * Project supervise reference
     * ===========================
     */
    private int superviseEntryStatus;


    /**
     * =========================
     * Project Archive reference
     * =========================
     */
    private int archiveEntryStatus;
    private String archiveNo;



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

    public float getOnlineScale() {
        return onlineScale;
    }

    public void setOnlineScale(float onlineScale) {
        this.onlineScale = onlineScale;
    }

    public ContractStatus getContractStatus() {
        return contractStatus;
    }

    public void setContractStatus(ContractStatus contractStatus) {
        this.contractStatus = contractStatus;
    }

    public String getAssetCode() {
        return assetCode;
    }

    public void setAssetCode(String assetCode) {
        this.assetCode = assetCode;
    }

    public String getAccountBookNo() {
        return accountBookNo;
    }

    public void setAccountBookNo(String accountBookNo) {
        this.accountBookNo = accountBookNo;
    }
}
