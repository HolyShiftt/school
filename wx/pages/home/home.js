// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isManager:false,
    isStudent:false,
  },

  goWebPage: function (event) {
    wx.navigateTo({
      url: '../webPage/'+event.target.dataset.web,
      success: function () {}, //成功后的回调；
    })
  },

  goCode:function() {
    wx.switchTab({
      url: '../home/code'
    })
  },

  goFeedback: function () {
    wx.navigateTo({
      url: '../other/feedback'
    })
  },

  goApply: function () {
    wx.navigateTo({
      url: '../apply/myapply'
    })
  },
  goUpdPwd: function () {
    wx.navigateTo({
      url: '../other/password'
    })
  },
  goReport: function () {
    wx.switchTab({
      url: '../report/report'
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
    if(!wx.getStorageSync("username")){
      wx.navigateTo({
        url: '../login/login'
      })
    }
    if(wx.getStorageSync("role") == 2){
      this.setData({
        isManager: false,
        isStudent: true,
      })
    }else if(wx.getStorageSync("role") == 1){
      this.setData({
        isManager: true,
        isStudent: false,
      })
    }
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