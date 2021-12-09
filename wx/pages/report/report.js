// pages/report/report.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address:"111",
    date:''
  },
// 设置打卡时间
setSignTime: function (e) {
  var that = this;
  var hour = ((+e.detail.value.slice(0, 2) + 24 - 2) % 24).toString();
  that.setData({
    'date': e.detail.value,
  });
},
  chooseLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function(res){
        that.setData({
          'address': res.address,
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
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