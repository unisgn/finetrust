package com.finetrust.util;

/**
 * Created by 0xFranCiS on Apr 05, 2015.
 */
public class MetaBuilder<E> {
    private boolean success = true;
    private String message;
    private long total;
    private E data;

    public MetaBuilder() {}

    public MetaBuilder success(boolean success) {
        this.success = success;
        return this;
    }

    public MetaBuilder message(String message) {
        this.message = message;
        return this;
    }

    public MetaBuilder data(E data) {
        this.data = data;
        return this;
    }

    public MetaBuilder total(int total) {
        this.total = total;
        return this;
    }





    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public E getData() {
        return data;
    }

    public void setData(E data) {
        this.data = data;
    }
}
