package com.school.index.service;

import com.school.index.dao.ApplyDao;
import com.school.index.pojo.Apply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplyServiceImpl implements ApplyService {

    @Autowired
    private ApplyDao applyDao;

    @Override
    public int applySub(Apply apply) {
        return applyDao.applySub(apply);
    }
}
