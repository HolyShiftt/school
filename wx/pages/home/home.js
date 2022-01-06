// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goSchoolPage: function () {
    wx.navigateTo({
      url: '../schoolWeb/schoolWeb',
      success: function () {}, //成功后的回调；
    })
  },


  getA: function() {
    wx.request({
      url: 'http://127.0.0.1:8080/',
      data: {},
      success: function (data) {
        console.log(data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!wx.getStorageSync("username")){
      wx.navigateTo({
        url: '../login/login'
      })
    }
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