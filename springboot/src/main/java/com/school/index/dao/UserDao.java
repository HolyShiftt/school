package com.school.index.dao;

import com.school.index.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserDao {

    List<User> selectAll();

    User getUserByUsername(String username);
}
