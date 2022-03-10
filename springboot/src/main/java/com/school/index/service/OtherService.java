package com.school.index.service;

import com.school.index.pojo.Feedback;

import java.util.List;

public interface OtherService {

    int subFeedback(String title, String content,String time, Integer id);

    List<Feedback> feedbackList(Integer id);

    List<Feedback> feedbackListNoReplay();

    int feedbackReplay(Integer id,String replay);
}
