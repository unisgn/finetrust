package com.finetrust.util;

/**
 * Created by 0xFranCiS on Mar 31, 2015.
 */
public class Pager {
    private int page;
    private long start;
    private long limit;
    public Pager() {}

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public long getStart() {
        return start;
    }

    public void setStart(long start) {
        this.start = start;
    }

    public long getLimit() {
        return limit;
    }

    public void setLimit(long limit) {
        this.limit = limit;
    }
}
