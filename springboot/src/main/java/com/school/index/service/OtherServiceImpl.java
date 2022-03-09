package com.school.index.service;

import com.school.index.dao.OtherDao;
import com.school.index.pojo.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OtherServiceImpl implements OtherService {

    @Autowired
    private OtherDao otherDao;

    @Override
    public int subFeedback(String title, String content,String time, Integer id) {
        return otherDao.subFeedback(title, content,time,id);
    }

    @Override
    public List<Feedback> feedbackList(Integer id) {
        return otherDao.feedbackList(id);
    }

    @Override
    public int feedbackReplay(Integer id, String replay) {
        return otherDao.feedbackReplay(id,replay);
    }
}
