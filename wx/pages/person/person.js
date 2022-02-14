// pages/person/person.js
var app = getApp();
Page({
  data: {
    username:wx.getStorageSync('username'),
    img:''
  },

  personInfo() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/user/person',
      data: {
        username: wx.getStorageSync('username'),
      },success: function (d) {
        that.setData({
          img: d.data.img,
          username: wx.getStorageSync('username'),
        })
      }
    })
  },

  quit: function () {
    wx.showModal({
      title: '提示',
      content: '你确定要退出吗',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorageSync()
          wx.navigateTo({
            url: '../login/login'
          })
          wx.showToast({
            title: '退出登录成功',
            icon: 'success',
            duration: 1000
          })
        } else {
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.personInfo()
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