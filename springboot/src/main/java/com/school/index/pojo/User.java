package com.school.index.pojo;

import lombok.Data;

@Data
public class User {
    private Integer id;
    private String username;
    private String name;
    private String password;
    private String img;
    private String stu_id;
    private Integer role;
    private String state;
}
