package com.school.visitor.service;

import com.school.visitor.pojo.Visitor;

import java.util.List;

public interface VisitorService {

    String visitorApply(Visitor visitor);

    String visitorChangeState(Integer id, Integer state);

    String showMyVisitor(String phone);

    List<Visitor> showVisitorList();
}
