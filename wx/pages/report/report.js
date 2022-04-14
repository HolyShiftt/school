// pages/report/report.js

var util = require('../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    address: '',
    time: '',
    radio1: [{value:'正常',checked: 'true'},{value:'发热'}],
    radio2:[{value:'无需隔离',checked:'true'},{value:'居家隔离'},{value:'集中隔离'},{value:'入院隔离'}],
    normal:'正常',
    isolation:'无需隔离',
    name: '',
    stuId: '',
    yes_noon_temp:36.2,
    yes_night_temp:36.4,
    today_morning_temp:36.2
  },
  radioChange1: function(e) {
    this.setData({
      normal:e.detail.value
    })
  },
  radioChange2: function(e) {
    this.setData({
      isolation:e.detail.value
    })
  },
  
  chooseLocation: function () {
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocationBackground',
            success(){
              that.location();
            }
          })
        } else {
          that.location();
        }
      }
    })
  },

  location:function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          'address': res.address,
        })
      },
      fail: function () {
        wx.showToast({
          title: "请获取当前位置",
          icon: 'error'
        })
      },
    })
  },

  myreport:function () {
    wx.navigateTo({
      url: './myreport'
    })
  },

  report: function () {
    var that = this
    if(this.data.address==''){
      wx.showToast({
        title: '请先选择地址',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1:8080/report/doReport',
        data: {
          user_id:this.data.id,
          name:this.data.name,
          address: this.data.address,
          time: this.data.time,
          normal:this.data.normal,
          yes_noon_temp:this.data.yes_noon_temp,
          yes_night_temp:this.data.yes_night_temp,
          today_morning_temp:this.data.today_morning_temp,
          isolation:this.data.isolation
        },
        success: function (d) {
          
          if (d.data == "填报成功") {
            wx.showToast({
              title: d.data,
              icon: 'success',
              success: function () {
                if(that.data.normal != "发热" && that.data.isolation == "无需隔离"){
                  wx.setStorageSync("state",that.formatDate(new Date()))
                }else{
                  wx.setStorageSync("state","1999-01-01")
                }
                
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
    }
  },
  formatDate: function(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month.toString()
    month[1] ? month=month :month='0' + month
    let day = date.getDate()
    day = day.toString()
    day[1] ? day=day : day='0' + day
    return year+"-"+month+"-"+day
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var TIME = util.formatTime(new Date());
    this.setData({
      time: TIME,
      name: wx.getStorageSync('name'),
      stuId: wx.getStorageSync('stuId'),
      id:wx.getStorageSync('id')
    });
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