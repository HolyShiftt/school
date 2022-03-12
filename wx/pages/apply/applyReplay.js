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
  agree:function (event) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8080/apply/applyReplay',
      data: {
        id:event.target.dataset.id,
        replay:event.target.dataset.replay,
        reasonId: 99
      },
      success: function (d) {
        if(d.data.msg == "成功"){
          that.onShow();
        }
      }
    })
  },
  disagree:function (event) {
    var that = this
    wx.showActionSheet({
      itemList: ['格式错误','出行地点不允许','时间填写错误'],
      success:function (res) {
        if(!res.cancel){
          wx.request({
            url: 'http://127.0.0.1:8080/apply/applyReplay',
            data: {
              id:event.target.dataset.id,
              replay:event.target.dataset.replay,
              reasonId:res.tapIndex,
            },
            success: function (d) {
              if(d.data.msg == "成功"){
                that.onShow();
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/apply/applyListNoReplay',
      success: function (d) {
        that.setData({
          List: d.data.data
        })
      }
    })
  },

  // replay: function (event) {
  //   var that = this
  //   console.log(event.target.dataset)
  //   wx.request({
  //     url: 'http://127.0.0.1:8080/apply/applyListNoReplay',

  //   })
  // },
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