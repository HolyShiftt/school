package com.school.index.service;

import com.school.index.dao.ReportDao;
import com.school.index.pojo.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportDao reportDao;

    @Override
    public int doReport(Report report) {
        return reportDao.doReport(report);
    }

    @Override
    public List<Report> myReport(Integer id) {
        return reportDao.myReport(id);
    }
}
