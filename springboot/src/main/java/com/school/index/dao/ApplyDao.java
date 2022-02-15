package com.school.index.dao;

import com.school.index.pojo.Apply;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ApplyDao {
    int applySub(Apply apply);

    int lastApply(Integer id);
}
