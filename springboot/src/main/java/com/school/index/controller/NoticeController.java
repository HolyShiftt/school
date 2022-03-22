package com.school.index.controller;

import com.school.index.pojo.Apply;
import com.school.index.pojo.Notice;
import com.school.index.pojo.Report;
import com.school.index.pojo.Res;
import com.school.index.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
@RequestMapping("notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping("/noticeList")
    @ResponseBody
    public Res noticeList(Integer limit){
        return Res.success(noticeService.noticeList(limit));
    }

    @RequestMapping("/addNotice")
    @ResponseBody
    public String addNotice(Notice notice){
        noticeService.addNotice(notice);
        return "发布成功";
    }

    @RequestMapping("/delNotice")
    @ResponseBody
    public String delNotice(Integer id){
        noticeService.delNotice(id);
        return "删除成功";
    }
}
