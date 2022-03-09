package com.school.index.service;

import com.school.index.dao.ReportDao;
import com.school.index.dao.UserDao;
import com.school.index.pojo.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportDao reportDao;
    @Autowired
    private UserDao userDao;

    @Override
    public int doReport(Report report) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String date = formatter.format(new Date()) ;
        // 修改用户状态
        userDao.updState(report.getUser_id(),date);
        return reportDao.doReport(report);
    }

    @Override
    public List<Report> myReport(Integer id) {
        return reportDao.myReport(id);
    }
}
