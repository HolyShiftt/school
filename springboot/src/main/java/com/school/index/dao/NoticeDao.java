package com.school.index.dao;

import com.school.index.pojo.Notice;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeDao {

    void addNotice(Notice notice);

    void delNotice(Integer id);

    List<Notice> noticeList(Integer limit);
}
