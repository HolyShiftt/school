package com.school.index.service;

import com.school.index.pojo.Apply;
import com.school.index.pojo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface NoticeService {

    void addNotice(Notice notice);

    void delNotice(Integer id);

    List<Notice> noticeList(Integer limit);
}
