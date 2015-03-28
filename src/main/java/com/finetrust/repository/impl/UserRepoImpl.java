package com.finetrust.repository.impl;

import com.finetrust.domain.entity.User;
import com.finetrust.repository.UserRepo;
import org.springframework.stereotype.Repository;

/**
 * Created by 0xFranCiS on Mar 23, 2015.
 */
@Repository
public class UserRepoImpl extends RepositoryImpl<User, Integer> implements UserRepo {
}
