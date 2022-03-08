package com.school.index.service;

import com.school.index.dao.UserDao;
import com.school.index.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUser(String username,String role) {
        return userDao.getUser(username, role);
    }

    @Override
    public User getUserByUsername(String username) {
        return userDao.getUserByUsername(username);
    }

    @Override
    public int updateImg(Integer id, String img) {
        return userDao.updateImg(id,img);
    }

    @Override
    public int updPwd(String username, String pwd2) {
        return userDao.updPwd(username, pwd2);
    }
}
