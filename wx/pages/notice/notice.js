//issues.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util')
Page({
  data: {
    title: '',
    content: '',
    time:''
  },

  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  contentInput: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  submit:function () {
    var TIME = util.formatTime(new Date());
    wx.request({
      url: 'http://127.0.0.1:8080/notice/addNotice',
      data: {
        title: this.data.title,
        content: this.data.content,
        time:TIME,
      },
      success: function (d) {
        if (d.data != "提交失败") {
          wx.showToast({
            title: d.data,
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function() {
                wx.switchTab({
                  url: '../person/person'
                })
             }, 2000);
            }
          })
        } else {
          wx.showToast({
            title: d.data,
            icon: 'error',
            duration: 2000
          })
        }
      }
    })
  },

  onLoad: function(){
   
  },

});