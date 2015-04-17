package com.finetrust.domain.entity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@MappedSuperclass
public abstract class BusinessEntity extends AuditableEntity {
    @Column(nullable = false, unique = true, updatable = false, length = 64)
    private String number;

    @Column(unique = true, length = 64)
    private String code;

    @Column(unique = true, length = 64)
    private String name;

    @Column(length = 64)
    private String alias;

    private String brief;
    private String searchText;

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText;
    }
}
