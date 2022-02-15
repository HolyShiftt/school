package com.school.index.pojo;

import lombok.Data;

@Data
public class Report {

    private Integer id;

    private Integer user_id;

    private String name;

    private String address;

    private String time;

    private String normal;

    private String yes_noon_temp;

    private String yes_night_temp;

    private String today_morning_temp;

    private String isolation;

}
