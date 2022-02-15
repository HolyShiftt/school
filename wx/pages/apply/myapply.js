Page({
 
  data:{
   
      tableInfo: {},
      count:''
  },
   
   
  onReady: function () {
      // 生命周期函数--监听页面初次渲染完成
      var that = this;
      wx.request({
        url: 'http://127.0.0.1:8080/report/myReport',
        data: {
          id:wx.getStorageSync('id')
        },
        success: function (d) {
          let item = [];
          for (const iterator of d.data.data) {
            let item1 = [iterator.name,iterator.time,iterator.normal,iterator.address];
            item.push(item1)
          }
          that.setData({
            tableInfo:{
              title:["姓名","填报时间","体温状况","位置"],
              contentItem: item,
            },
            count: d.data.data.length
          })
        }
      })
      
    },
   
  })