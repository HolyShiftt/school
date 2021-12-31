package com.school.index.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("report")
public class ReportController {

    @RequestMapping("/doReport")
    @ResponseBody
    public void doReport(String address, String time, String isNormal){
        System.out.println(address);
        System.out.println(time);
        System.out.println(isNormal);
    }
}
