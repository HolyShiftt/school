package com.school.visitor.service.impl;

import com.school.visitor.dao.VisitorDao;
import com.school.visitor.pojo.Visitor;
import com.school.visitor.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitorServiceImpl implements VisitorService {

    @Autowired
    private VisitorDao visitorDao;

    @Override
    public String visitorApply(Visitor visitor) {
        if (visitorDao.getApplyByPhone(visitor.getPhone())==0){
            visitorDao.visitorApply(visitor);
            return "申请成功";
        }else {
            return "不能重复申请";
        }
    }

    @Override
    public String visitorChangeState(Integer id, Integer state) {
        visitorDao.visitorChangeState(id, state);
        if (state == 1)
        { return "审批成功";
        }else{
            return "已驳回";
        }
    }

    @Override
    public String showMyVisitor(String phone) {
        int i = visitorDao.showMyVisitor(phone);
        if (i == 0){
            return "您的审批正在申请";
        }else if(i==1){
            return "审批通过";
        }else{
            return "申请已被驳回,请重新申请";
        }
    }

    @Override
    public List<Visitor> showVisitorList() {
        return visitorDao.showVisitorList();
    }
}
