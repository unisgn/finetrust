package com.finetrust.domain.entity;

import javax.persistence.MappedSuperclass;

/**
 * Created by 0xFranCiS on Apr 12, 2015.
 */
@MappedSuperclass
public class ProjectPartFlowable extends ProjectPart {
    private FlowInstance flowInstance;
    private FlowStatus flowStatus;

    public FlowInstance getFlowInstance() {
        return flowInstance;
    }

    public void setFlowInstance(FlowInstance flowInstance) {
        this.flowInstance = flowInstance;
    }

    public FlowStatus getFlowStatus() {
        return flowStatus;
    }

    public void setFlowStatus(FlowStatus flowStatus) {
        this.flowStatus = flowStatus;
    }
}
