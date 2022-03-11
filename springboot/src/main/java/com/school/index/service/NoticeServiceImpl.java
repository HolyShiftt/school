package com.school.index.service;

import com.school.index.dao.NoticeDao;
import com.school.index.pojo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public int addNotice(Notice notice) {
        return 0;
    }
}
