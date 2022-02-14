package com.school.index.controller;

import com.school.index.pojo.Res;
import com.school.index.pojo.User;
import com.school.index.service.OtherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("other")
public class OtherController {

    @Autowired
    private OtherService otherService;

    @RequestMapping("/subFeedback")
    @ResponseBody
    public String subFeedback(String title, String content,String time, Integer id){
        if (otherService.subFeedback(title, content,time,id) != 0){
            return "提交成功";
        }else{
            return "提交失败";
        }

    }

    @RequestMapping("/feedbackList")
    @ResponseBody
    public Res feedbackList(Integer id){
        return Res.success(otherService.feedbackList(id));
    }
}
