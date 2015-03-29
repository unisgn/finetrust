package com.finetrust.domain.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class FlowModel {
    private String code;
    private String name;
    private Set<FlowModelItem> items = new HashSet<FlowModelItem>();
}
