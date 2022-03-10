package com.school.visitor.dao;

import com.school.visitor.pojo.Visitor;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface VisitorDao {

    int getApplyByPhone(String phone);

    int visitorApply(Visitor visitor);

    int visitorChangeState(Integer id, Integer state);

    int showMyVisitor(String phone);

    List<Visitor> showVisitorList();
}
