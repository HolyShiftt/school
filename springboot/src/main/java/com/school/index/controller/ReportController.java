package com.school.index.controller;

import com.school.index.pojo.Report;
import com.school.index.pojo.Res;
import com.school.index.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @RequestMapping("/doReport")
    @ResponseBody
    public String doReport(Report report){

        if (reportService.doReport(report)!=0){
            return "填报成功";
        }else {
            return "填报失败";
        }
    }

    @RequestMapping("/myReport")
    @ResponseBody
    public Res myReport(Integer id){
        return Res.success(reportService.myReport(id));
    }
}
