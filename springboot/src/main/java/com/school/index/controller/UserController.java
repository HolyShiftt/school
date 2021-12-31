package com.school.index.controller;

import com.school.index.pojo.User;
import com.school.index.service.UserService;
import jdk.nashorn.internal.runtime.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public String login(String username, String password){
        User user = userService.getUserByUsername(username);
        if (user!=null){
            if (user.getPassword().equals(password)){
                return "登录成功";
            }else {
                return "密码错误";
            }
        }else{
            return "该用户名不存在";
        }

    }


    @RequestMapping("/userInfo")
    @ResponseBody
    public User userInfo(String username){
        return userService.getUserByUsername(username);
    }

}
