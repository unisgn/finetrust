package com.finetrust.util;

import java.util.List;

/**
 * Created by 0xFranCiS on Apr 01, 2015.
 */
public class ParamWrapper {
    private int start;
    private int page;
    private int limit;
    private List<Filter> filter;
    private List<Sorter> sorter;
    public ParamWrapper() {}

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public List<Filter> getFilter() {
        return filter;
    }

    public void setFilter(List<Filter> filter) {
        this.filter = filter;
    }

    public List<Sorter> getSorter() {
        return sorter;
    }

    public void setSorter(List<Sorter> sorter) {
        this.sorter = sorter;
    }
}
