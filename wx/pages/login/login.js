Page({
      data: {
        phone: '',
        password: ''
      },

      // 获取输入账号 
      phoneInput: function (e) {
        this.setData({
          phone: e.detail.value
        })
      },

      // 获取输入密码 
      passwordInput: function (e) {
        this.setData({
          password: e.detail.value
        })
      },

      // 登录 
      login: function () {
        var username = this.data.phone
        wx.request({
          url: 'http://127.0.0.1:8080/user/login',
          data: {
            username: this.data.phone,
            password: this.data.password
          },
          success: function (d) {
            if (d.data == "登录成功") {
              wx.setStorageSync("username",username);
              wx.showToast({
                title: d.data,
                icon: 'success',
                success: function () {
                  wx.switchTab({
                    url: '../home/home'
                  })
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
    })