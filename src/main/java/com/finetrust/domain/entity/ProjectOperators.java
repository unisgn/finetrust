package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectOperators extends ProjectPart {
    private String assetCode;
    private String accountBookNo;
    private Set<ProjectOperator> operators = new HashSet<ProjectOperator>();

    public String getAssetCode() {
        return assetCode;
    }

    public void setAssetCode(String assetCode) {
        this.assetCode = assetCode;
        if (getProject() != null) {
            getProject().setAssetCode(assetCode);
        }
    }

    public String getAccountBookNo() {
        return accountBookNo;
    }

    public void setAccountBookNo(String accountBookNo) {
        this.accountBookNo = accountBookNo;
        if (getProject() != null) {
            getProject().setAccountBookNo(accountBookNo);
        }
    }
}
