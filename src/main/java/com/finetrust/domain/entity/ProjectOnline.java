package com.finetrust.domain.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Apr 06, 2015.
 */
public class ProjectOnline extends ProjectPart {
    private Date onlineDate;
    private float onlineScale;
    Set<ProjectOnlineContact> contacts = new HashSet<ProjectOnlineContact>();


    public Date getOnlineDate() {
        return onlineDate;
    }

    public void setOnlineDate(Date onlineDate) {
        this.onlineDate = onlineDate;
        if (getProject() != null) {
            getProject().setOnlineDate(onlineDate);
        }
    }

    public float getOnlineScale() {
        return onlineScale;
    }

    public void setOnlineScale(float onlineScale) {
        this.onlineScale = onlineScale;
        if (getProject() != null) {
            getProject().setOnlineScale(onlineScale);
        }
    }
}
