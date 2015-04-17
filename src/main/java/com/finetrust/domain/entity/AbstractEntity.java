package com.finetrust.domain.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@MappedSuperclass
public abstract class AbstractEntity<PK extends Serializable> implements Persistable<PK> {

    private static final long serialVersionUID = -5054755613952418744L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private PK id;

    @Version
    private int version;

    private boolean archived = false;

    private boolean active = true;



    public PK getId() {
        return id;
    }

    protected void setId(final PK id) {
        this.id = id;
    }

    public boolean isNew() {
        return null == getId();
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

    @Override
    public String toString() {

        return String.format("Entity of type %s with id: %s", this.getClass().getName(), getId());
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {

        if (null == obj) {
            return false;
        }

        if (this == obj) {
            return true;
        }

        if (!getClass().equals(obj.getClass())) {
            return false;
        }

        AbstractEntity<?> that = (AbstractEntity<?>) obj;

        return null != this.getId() && this.getId().equals(that.getId());
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {

        int hashCode = 17;

        hashCode += null == getId() ? 0 : getId().hashCode() * 31;

        return hashCode;
    }

}
