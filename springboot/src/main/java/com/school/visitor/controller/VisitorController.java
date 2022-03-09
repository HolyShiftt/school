package com.school.visitor.controller;

import com.school.index.pojo.Apply;
import com.school.visitor.pojo.Visitor;
import com.school.visitor.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
@RequestMapping("visitor")
public class VisitorController {

    @Autowired
    private VisitorService visitorService;

    @ResponseBody
    @RequestMapping("/visitorApply")
    public String visitorApply(Visitor visitor) {
//        visitor.setCreate_time(new Date().toString());
        return visitorService.visitorApply(visitor);
    }

    @ResponseBody
    @RequestMapping("/visitorChangeState")
    public String visitorChangeState(Integer id, Integer userId,Integer state) {
        return visitorService.visitorChangeState(id, userId,state);
    }

    @ResponseBody
    @RequestMapping("/showMyVisitor")
    public String showMyVisitor(String phone) {
        return visitorService.showMyVisitor(phone);
    }
}
