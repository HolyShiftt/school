package com.school.index.service;

import com.school.index.dao.UserDao;
import com.school.index.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<User> redCodeList() {
        return userDao.redCodeList();
    }

    @Override
    public String addUser(User user) {
        if (userDao.getUserByUsername(user.getUsername()) == null){
            userDao.addUser(user);
            return "添加成功";
        }else{
            return "该用户已存在";
        }
    }
}
