package com.school.index.service;

import com.school.index.pojo.User;


public interface UserService {

    User getUser(String username,String role);

    User getUserByUsername(String username);

    int updateImg(Integer id,String img);

    int updPwd(String username,String pwd2);
}
