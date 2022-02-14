package com.school.index.pojo;

import lombok.Data;

@Data
public class Feedback {

    private Integer id;

    private String title;

    private String content;

    private String time;

    private String reply;
}
