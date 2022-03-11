package com.school.index.service;

import com.school.index.pojo.Apply;
import com.school.index.pojo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public interface NoticeService {

    int addNotice(Notice notice);
}
