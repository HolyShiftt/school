package com.school.index.dao;

import com.school.index.pojo.Apply;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ApplyDao {
    int applySub(Apply apply);

    int lastApply(Integer id);

    List<Apply> applyListNoReplay();

    int applyReplay(Integer id, String replay, String reason);
}
