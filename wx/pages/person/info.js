// pages/person/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:wx.getStorageSync('id'),
    name:wx.getStorageSync('name'),
    stuId:wx.getStorageSync('stuId'),
    img:''
  },

  personInfo() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/user/person',
      data: {
        username: wx.getStorageSync('username'),
      },success: function (d) {
        that.setData({
          img: d.data.img,
          name: wx.getStorageSync('name'),
        })
      }
    })
  },

  uploadImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: 'compressed',
      sourceType: ['album', 'camera'],
      success (res) {
        let imgbase64 = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64")
        that.setData({
          img: imgbase64,
        })
      }
    })
  },

  update: function () {
    wx.request({
      url: 'http://127.0.0.1:8080/user/updateImg',
      data: {
        id: this.data.id,
        img: this.data.img
      },success: function (d) {
        if (d.data != "修改失败") {
          wx.showToast({
            title: d.data,
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function() {
                wx.switchTab({
                  url: '../person/person'
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
    this.personInfo()
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