package com.school.index.pojo;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class Notice {

    private Integer id;

    private String title;

    private String content;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String time;

}

