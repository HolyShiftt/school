package com.school.index.controller;

import com.school.index.pojo.Res;
import com.school.index.pojo.User;
import com.school.index.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public Res login(String username, String password){
        User user = userService.getUserByUsername(username);
        if (user!=null){
            if (user.getPassword().equals(password)){
                return Res.success(user);
            }else {
                return Res.error("密码错误");
            }
        }else{
            return Res.error("该用户名不存在");
        }

    }

    @RequestMapping("/person")
    @ResponseBody
    public User person(String username){
        return userService.getUserByUsername(username);
    }

    @RequestMapping("/updateImg")
    @ResponseBody
    public String updateImg(Integer id,String img){
        if (userService.updateImg(id,img) != 0){
            return "修改成功";
        }else{
            return "修改失败";
        }
    }

    @RequestMapping("/updPwd")
    @ResponseBody
    public String updPwd(String username,String pwd1,String pwd2){
        User user = userService.getUserByUsername(username);
        if (user.getPassword().equals(pwd1)){
            userService.updPwd(username, pwd2);
            return "请重新登录";
        }else {
            return "原密码错误";
        }
    }

    @RequestMapping("/redCodeList")
    @ResponseBody
    public Res redCodeList(){
        return Res.success(userService.redCodeList());
    }

    @RequestMapping("/addUser")
    @ResponseBody
    public Res addUser(String username,String name,Integer role){
        User user = new User();
        user.setUsername(username);
        user.setPassword(username);
        user.setName(name);
        if (role == 2){
            user.setStu_id(username);
        }
        user.setRole(role);
        return Res.success(userService.addUser(user));
    }
}
