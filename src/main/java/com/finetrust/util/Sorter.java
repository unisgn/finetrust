package com.finetrust.util;

/**
 * Created by 0xFranCiS on Mar 31, 2015.
 */
public class Sorter implements Sortable {
    private String property;
    private String direction;

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
}
