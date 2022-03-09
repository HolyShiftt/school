Page({
      data: {
        username: '',
        password: ''
      },

      // 获取输入账号 
      usernameInput: function (e) {
        this.setData({
          username: e.detail.value
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
        var username = this.data.username
        if(this.data.username == '' || this.data.password == ''){
          wx.showToast({
            title: "请完善登录信息",
            icon: 'error',
            duration: 2000
          })
        }else{
          wx.request({
            url: 'http://127.0.0.1:8080/user/login',
            data: {
              username: this.data.username,
              password: this.data.password,
            },
            success: function (d) {
              if (d.data.msg == "成功") {
                wx.setStorageSync("username",username);
                if(d.data.data.stu_id){
                  wx.setStorageSync("stuId",d.data.data.stu_id);
                }
                wx.setStorageSync("id",d.data.data.id);
                wx.setStorageSync("name",d.data.data.name);
                wx.setStorageSync("role",d.data.data.role);
                wx.setStorageSync("state",d.data.data.state)
                wx.showToast({
                  title: "登录成功",
                  icon: 'success',
                  success: function () {
                    wx.switchTab({
                      url: '../home/home'
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: d.data.msg,
                  icon: 'error',
                  duration: 2000
                })
              }
            }
          })
        }
      },

      visitor: function () {
        wx.navigateTo({
          url: '../visitor/visitor',
          success: function () {}, //成功后的回调；
        })
      },
    })