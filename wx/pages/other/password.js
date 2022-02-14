// pages/other/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:wx.getStorageSync('username'),
    pwd1:'',
    pwd2:'',
    pwd3:''
  },
  pwd1: function (e) {
    this.setData({
      pwd1: e.detail.value
    })
  },
  pwd2: function (e) {
    this.setData({
      pwd2: e.detail.value
    })
  },
  pwd3: function (e) {
    this.setData({
      pwd3: e.detail.value
    })
  },

  submit: function () {
    if(this.data.pwd2 != this.data.pwd3){
      wx.showToast({
        title: '新密码不一致',
        icon: 'error',
        duration: 2000
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1:8080/user/updPwd',
        data: {
          username: this.data.username,
          pwd1: this.data.pwd1,
          pwd2: this.data.pwd2
        },
        success: function (d) {
          if (d.data == "请重新登录") {
            wx.showToast({
              title: d.data,
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function() {
                  wx.clearStorageSync()
                  wx.navigateTo({
                    url: '../login/login'
                  })
               }, 2000);
              }
            })
          } else {
            wx.showToast({
              title: d.data,
              icon: 'error',
              duration: 2000
            })
          }
        }
      })
    }
    
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