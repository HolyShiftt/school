Page({
 
  data:{
   
      tableInfo: {},
      count:''
  },
   
   
  onReady: function () {
      // 生命周期函数--监听页面初次渲染完成
      var that = this;
      wx.request({
        url: 'http://127.0.0.1:8080/user/redCodeList',
        success: function (d) {
          let item = [];
          for (const iterator of d.data.data) {
            let item1 = [iterator.stu_id,iterator.name];
            item.push(item1)
          }
          that.setData({
            tableInfo:{
              title:["学号","姓名"],
              contentItem: item,
            },
            count: d.data.data.length
          })
        }
      })
      
    },
   
  })