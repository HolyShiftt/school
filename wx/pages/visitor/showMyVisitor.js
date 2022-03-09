// pages/visitor/showMyVisitor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    greenCode: false,
    redCode: false,
    msg: "请先输入手机号查询您的申请状态",
    phone: ''
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  submit: function () {
    var that = this;
    if (this.data.phone == '') {
      wx.showToast({
        title: "请输入手机号",
        icon: 'error',
        duration: 2000
      })
    } else {
      wx.request({
        url: 'http://127.0.0.1:8080/visitor/showMyVisitor',
        data: {
          phone: this.data.phone,
        },
        success: function (d) {
          if (d.data == "审批通过") {
            that.setData({
              greenCode:true,
              redCode:false,
              msg:d.data
            })
          }else{
            that.setData({
              greenCode:false,
              redCode:true,
              msg:d.data
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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