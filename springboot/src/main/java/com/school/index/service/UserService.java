package com.school.index.service;

import com.school.index.pojo.User;


public interface UserService {

    User getUserByUsername(String username);

    int updateImg(Integer id,String img);

    int updPwd(String username,String pwd2);
}
