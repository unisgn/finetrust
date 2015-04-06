package com.finetrust.domain.entity;

import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * Created by 0xFranCiS on Apr 06, 2015.
 */
@MappedSuperclass
public class AuditableEntity extends AbstractEntity<Long> {
}
