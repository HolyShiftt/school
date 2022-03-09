package com.school.visitor.dao;

import com.school.visitor.pojo.Visitor;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface VisitorDao {

    int getApplyByPhone(String phone);

    int visitorApply(Visitor visitor);

    int visitorChangeState(Integer id, Integer userId,Integer state);

    int showMyVisitor(String phone);
}
