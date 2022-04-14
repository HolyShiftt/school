// pages/home/code.js
var util = require('../../utils/util.js');
Page({
  data: {
    imgUrl:'../../img/code.jpg',
    stuId: '',
    name: wx.getStorageSync('name'),
    isHealth: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      stuId : wx.getStorageSync('stuId'),
      name : wx.getStorageSync('name')
    })

    
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
    this.setData({
      stuId : wx.getStorageSync('stuId'),
      name : wx.getStorageSync('name')
    })
    setInterval(() => {
      var time = util.formatTime(new Date())
    //为页面中time赋值
    this.setData({
      time: time
    })
    }, 1000);
    if(wx.getStorageSync("state") == this.formatDate(new Date())){
      this.setData({
        isHealth:1
      })
    }else{
      this.setData({
        isHealth:0
      })
    }
    wx.request({
      url: 'http://127.0.0.1:8080/code/showCode',
      data: {
        stuId:this.data.stuId,
        name:this.data.name,
        isHealth: this.data.isHealth
      },
      success: function (d) {}
    })
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
})