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

    private ProjectBase basicInfo;


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
