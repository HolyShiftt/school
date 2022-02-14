package com.school.index.pojo;

import lombok.Data;

@Data
public class Res<T> {
    private String msg;
    private T data;

    public Res() {
    }

    public Res(T data) {
        this.data = data;
    }

    public static Res success(){
        Res res = new Res<>();
        res.setMsg("成功");
        return res;
    }

    public static <T> Res<T> success(T data){
        Res<T> res = new Res<>(data);
        res.setMsg("成功");
        return res;
    }

    public static Res error(String msg){
        Res res = new Res<>();
        res.setMsg(msg);
        return res;
    }
}
