package com.school.index.service;

import com.school.index.pojo.Apply;

import java.util.List;

public interface ApplyService {
    String applySub(Apply apply);

    List<Apply> applyListNoReplay();

    String applyReplay(Integer id, String replay,String reason);
}
