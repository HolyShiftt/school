package com.school.visitor.service;

import com.school.visitor.pojo.Visitor;

public interface VisitorService {

    String visitorApply(Visitor visitor);

    String visitorChangeState(Integer id, Integer userId,Integer state);

    String showMyVisitor(String phone);
}
