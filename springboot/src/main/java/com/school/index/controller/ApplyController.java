package com.school.index.controller;

import com.school.index.pojo.Apply;
import com.school.index.pojo.Res;
import com.school.index.service.ApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
@RequestMapping("apply")
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @RequestMapping("/applySub")
    @ResponseBody
    public String applySub(Apply apply) {
        apply.setCreate_time(new Date().toString());
        return applyService.applySub(apply);
    }

    @RequestMapping("/applyListNoReplay")
    @ResponseBody
    public Res applyListNoReplay() {
       return Res.success(applyService.applyListNoReplay());
    }


    @RequestMapping("/applyReplay")
    @ResponseBody
    public Res applyReplay(Integer id,String replay,Integer reasonId) {
        String reason = null;
        if (reasonId == 0){
            reason = "格式错误";
        }else if(reasonId == 1){
            reason = "出行地点不允许";
        }else if(reasonId == 2){
            reason = "时间填写错误";
        }else if(reasonId == 99){
            reason = "";
        }
        return Res.success(applyService.applyReplay(id, replay,reason));
    }
}
