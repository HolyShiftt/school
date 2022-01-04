// pages/person/person.js
var app = getApp();
Page({
  data: {
    user: {}
  },
  onShow: function(){
    this.getData();
  },
  getData: function(){
    var _this = this;
    var days = ['一','二','三','四','五','六','日'];
    _this.setData({
      'user': app._user,
      'time': {
        'term': app._time.term,
        'week': app._time.week,
        'day': days[app._time.day - 1]
      },
      'is_bind': !!app._user.is_bind
    });
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