package com.school.index.service;

import com.school.index.pojo.Report;

import java.util.List;

public interface ReportService {

    int doReport(Report report);

    List<Report> myReport(Integer id);
}
