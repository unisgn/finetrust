package com.finetrust.domain.entity;

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
        this.username = name;
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

    protected void setArchived(boolean archived) {
        this.archived = archived;
    }

    public boolean isActive() {
        return active;
    }

    protected void setActive(boolean active) {
        this.active = active;
    }

    public boolean isNew() {
        return null == getId();
    }
}
