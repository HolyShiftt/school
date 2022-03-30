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
        if(!report.getNormal().equals("发热") || !report.getIsolation().equals("无需隔离")){
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String date = formatter.format(new Date()) ;
            // 修改用户状态
            userDao.updState(report.getUser_id(),date);
        }else{
            userDao.updState(report.getUser_id(),"1999-01-01");
        }
        return reportDao.doReport(report);

    }

    @Override
    public List<Report> myReport(Integer id) {
        return reportDao.myReport(id);
    }
}
