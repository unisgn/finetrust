package com.finetrust.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@Entity
public class User extends AbstractEntity<Integer> {
    @Column(nullable = false, unique = true, updatable = false, length = 64)
    private String name;
    private String password;
    private String alias;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}
