package com.school.index.dao;

import com.school.index.pojo.Feedback;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OtherDao {

    int subFeedback(String title, String content,String time, Integer id);

    List<Feedback> feedbackList(Integer id);

}
