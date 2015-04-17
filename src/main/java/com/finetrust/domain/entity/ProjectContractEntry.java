package com.finetrust.domain.entity;

import java.util.Date;

/**
 * Created by 0xFranCiS on Apr 06, 2015.
 */
public class ProjectContractEntry extends ProjectSegment {
    private Date setupDate;
    private ContractStatus contractStatus = ContractStatus.BLANK;
    private String contractNo;

    public Date getSetupDate() {
        return setupDate;
    }

    public void setSetupDate(Date setupDate) {
        this.setupDate = setupDate;
        if (getProject() != null) {
            getProject().setSetupDate(setupDate);
        }
    }

    public ContractStatus getContractStatus() {
        return contractStatus;
    }

    public void setContractStatus(ContractStatus contractStatus) {
        this.contractStatus = contractStatus;
        if (getProject() != null) {
            getProject().setContractStatus(contractStatus);
        }
    }

    public String getContractNo() {
        return contractNo;
    }

    public void setContractNo(String contractNo) {
        this.contractNo = contractNo;
        if (getProject() != null) {
            getProject().setContractNo(contractNo);
        }
    }
}
