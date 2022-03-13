// pages/other/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:'',
    replay: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  replay:function (event) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8080/visitor/visitorChangeState',
      data: {
        id:event.target.dataset.id,
        state:event.target.dataset.replay,
      },
      success: function (d) {
        if(d.data.msg == "成功"){
          that.onshow();
        }
      }
    })
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
      url: 'http://127.0.0.1:8080/visitor/showVisitorList',
      success: function (d) {
        that.setData({
          List: d.data.data
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