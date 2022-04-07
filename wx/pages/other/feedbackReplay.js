// pages/other/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackList:'',
    replay: [],
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
  doReplay: function (e) {
    this.setData({
      replay: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/other/feedbackListNoReplay',
      data: {
        id:wx.getStorageSync('id')
      },
      success: function (d) {
        for (const iterator of d.data.data) {
          if(!iterator.reply){
            iterator.reply = ""
          }
        }
        that.setData({
          feedbackList: d.data.data
        })
      }
    })
  },

  replay: function (event) {
    var that = this
    console.log(event.target.dataset)
    wx.request({
      url: 'http://127.0.0.1:8080/other/feedbackReplay',
      data: {
        id:event.target.dataset.id,
        replay:event.target.dataset.replay
      },
      success: function (d) {
        wx.showToast({
          title: d.data.msg,
          icon: 'success',
          duration: 2000,
          success: function () {
            that.setData({
              replay : ""
            })
            that.onShow()
          }
        })
        
      }
    })
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