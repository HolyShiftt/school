package com.school.index.service;

import com.school.index.dao.ApplyDao;
import com.school.index.pojo.Apply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplyServiceImpl implements ApplyService {

    @Autowired
    private ApplyDao applyDao;

    @Override
    public String applySub(Apply apply) {
        if (applyDao.lastApply(apply.getStu_id())==0){
            applyDao.applySub(apply);
            return "申请成功";
        }else {
            return "您已提交该日的申请，请等待审批";
        }
    }
}
