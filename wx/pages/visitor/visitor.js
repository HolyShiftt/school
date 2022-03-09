// pages/visitor/visitor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    time:'',
    phone:'',
    issue:'',
    meetName:''
  },
  showMyVisitor: function () {
    wx.navigateTo({
      url: './showMyVisitor',
      success: function () {}, //成功后的回调；
    })
  },
  report: function () {
    wx.request({
      url: 'http://127.0.0.1:8080/visitor/visitorApply',
      data: {
        phone: this.data.phone,
        issue: this.data.issue,
        meet_name: this.data.meetName,
        time: this.data.date+" "+this.data.time
      },
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  phoneChange: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  issueChange: function(e) {
    this.setData({
      issue: e.detail.value
    })
  },
  meetNameChange: function(e) {
    this.setData({
      meetName: e.detail.value
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