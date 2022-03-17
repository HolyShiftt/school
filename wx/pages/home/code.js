// pages/home/code.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    green:true,
    red:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      var time = util.formatTime(new Date())
    //为页面中time赋值
    this.setData({
      time: time
    })
    }, 1000);
    
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
    if(wx.getStorageSync("state") == this.formatDate(new Date())){
      this.setData({
        green:true,
        red:false
      })
    }else{
      this.setData({
        green:false,
        red:true
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