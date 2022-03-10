// pages/person/count.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useranme:'',
    name:'',
    radio1: [{name:'管理员',value:'1'},{name:'学生',value:'2',checked: 'true'}],
    role:'2'
  },
  radioChange: function(e) {
    this.setData({
      role:e.detail.value
    })
  },
  username: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  submit:function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8080/user/addUser',
      data: {
        username: this.data.username,
        name: this.data.name,
        role: this.data.role
      },
      success: function (d) {
        if (d.data.data == "添加成功") {
          wx.showToast({
            title: d.data.data,
            icon: 'success',
            duration: 2000,
          })
          that.onLoad();
        }else{
          wx.showToast({
            title: d.data.data,
            icon: 'error',
            duration: 2000,
          })
        }
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