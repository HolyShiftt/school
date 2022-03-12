package com.school.index.service;

import com.school.index.dao.ApplyDao;
import com.school.index.pojo.Apply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyServiceImpl implements ApplyService {

    @Autowired
    private ApplyDao applyDao;

    @Override
    public String applySub(Apply apply) {
        try {
            applyDao.lastApply(apply.getStu_id());
            return "您已提交该日的申请，请等待审批";
        }catch (Exception e){
            applyDao.applySub(apply);
            return "申请成功";
        }

    }

    @Override
    public List<Apply> applyListNoReplay() {
        return applyDao.applyListNoReplay();
    }

    @Override
    public List<Apply> myApply(Integer id) {
        return applyDao.myApply(id);
    }

    @Override
    public String applyReplay(Integer id, String replay,String reason) {
        applyDao.applyReplay(id,replay,reason);
        return null;
    }
}
