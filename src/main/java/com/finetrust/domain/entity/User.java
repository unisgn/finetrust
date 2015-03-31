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

    @Override
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
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
}
