package com.finetrust.domain.entity;


import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@Entity(name="t_user")
public class User implements Persistable<Integer>{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Version
    private int version;

    private boolean archived = false;

    private boolean active = true;

    @Column(nullable = false, unique = true, updatable = false, length = 64)
    private String username;
    private String password;

    public String getUserName() {
        return username;
    }

    public void setUserName(String name) {
        if (validateUsername(name)) {
            this.username = name.trim().toUpperCase();
        } else {

        }
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    protected void setId(Integer id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    protected void setVersion(int version) {
        this.version = version;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public boolean isNew() {
        return null == getId();
    }

    private boolean validateUsername(String username) {
        return (username != null && StringUtils.isNotBlank(username) && username.trim().matches("^[_a-zA-Z][-._a-zA-Z0-9]*[-_a-zA-Z0-9]$"));
    }
}
