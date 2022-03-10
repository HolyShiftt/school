package com.school.index.dao;

import com.school.index.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserDao {

    List<User> selectAll();

    User getUser(String username,String role);

    User getUserByUsername(String username);

    int updateImg(Integer id,String img);

    int updPwd(String username, String pwd2);

    int updState(Integer id, String date);

    List<User> redCodeList();

    int addUser(User user);
}
