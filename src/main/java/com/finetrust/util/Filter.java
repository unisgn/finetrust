package com.finetrust.util;

import org.springframework.stereotype.Component;

/**
 * Created by 0xFranCiS on Mar 31, 2015.
 */
@Component
public class Filter {
    private String field;
    private String type;
    private String value;
    private String comparison;

    public Filter() {}

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getComparison() {
        return comparison;
    }

    public void setComparison(String comparison) {
        this.comparison = comparison;
    }
}
