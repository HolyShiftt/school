// pages/report/report.js

var util = require('../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    time: '',
    isNormal:'',
    username:wx.getStorageSync('username')
  },
  
  chooseLocation: function () {
    wx.getSetting({
      success (res) {
        if(!res.authSetting.address){
          wx.openSetting({})
        }else{
          var that = this;
          wx.chooseLocation({
            success: function (res) {
              that.setData({
                'address': res.address,
              })
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        }
      }
    })
   
  },

  report: function () {
    wx.request({
      url: 'http://127.0.0.1:8080/report/doReport',
      data: {
        address: this.data.address,
        time: this.data.time,
        isNormal: this.data.isNormal
      },
      success: function (d) {
        if (d.data == "登录成功") {
          wx.showToast({
            title: d.data,
            icon: 'success',
            success: function () {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var TIME = util.formatTime(new Date());
    this.setData({
    time: TIME,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})