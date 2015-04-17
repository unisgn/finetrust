package com.finetrust.domain.entity;

import java.sql.PreparedStatement;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
public class ProjectAccountEntry extends ProjectSegment {
    private Set<ProjectAccount> accounts = new HashSet<ProjectAccount>();
}
