package com.school.index.service;

import com.school.index.dao.NoticeDao;
import com.school.index.pojo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public void addNotice(Notice notice) {
        noticeDao.addNotice(notice);
    }

    @Override
    public void delNotice(Integer id) {
        noticeDao.delNotice(id);
    }

    @Override
    public List<Notice> noticeList(Integer limit) {
        return noticeDao.noticeList(limit);
    }
}
