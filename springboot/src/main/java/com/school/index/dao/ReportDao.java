package com.school.index.dao;

import com.school.index.pojo.Report;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReportDao {

    int doReport(Report report);

    List<Report> myReport(Integer id);

}
