// pages/apply/apply.js
var dateTimePicker = require('./dateTimePicker.js');
Page({
  data: {
    isMaskWindowShow: false,
    maskWindowList: ['时间太早', '时间太晚', '距离太远', '交通不方便', '其他（输入）', '没有原因'],
    selectIndex: -1,
    isMaskWindowInputShow: false,
    maskWindowInputValue: "",
    type: '',
    typeTitle: '',
    transport: '',

    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    dateTimeArray2: null,
    dateTime2: null,
    startYear: 2000,
    endYear: 2050,
    date1: '',
    date2: '',

    issue: '',
    place: '',
    id: wx.getStorageSync('id')
  },
  issue: function (e) {
    this.setData({
      issue: e.detail.value
    });
  },
  place: function (e) {
    this.setData({
      place: e.detail.value
    });
  },
  report: function () {
    var data = this.data;
    this.setData({
      date1: data.dateTimeArray1[0][data.dateTime1[0]] + "-" + data.dateTimeArray1[1][data.dateTime1[1]] + "-" +
        data.dateTimeArray1[2][data.dateTime1[2]] + " " + data.dateTimeArray1[3][data.dateTime1[3]] + ":" + data.dateTimeArray1[4][data.dateTime1[4]],
      date2: data.dateTimeArray2[0][data.dateTime2[0]] + "-" + data.dateTimeArray2[1][data.dateTime2[1]] + "-" +
        data.dateTimeArray2[2][data.dateTime2[2]] + " " + data.dateTimeArray2[3][data.dateTime2[3]] + ":" + data.dateTimeArray2[4][data.dateTime2[4]]
    })
    if (data.dateTime1[0] <= data.dateTime2[0]) {
      if (data.dateTime1[1] > data.dateTime2[1] || (data.dateTime1[1] <= data.dateTime2[1] && data.dateTime1[2] > data.dateTime2[2])) {
        wx.showToast({
          title: '结束日期不能早于开始日期',
          icon: 'none',
          duration: 2000
        })
      } else if (data.dateTime1[1] == data.dateTime2[1] && data.dateTime1[2] == data.dateTime2[2]) {
        if (data.dateTime1[3] > data.dateTime2[3] || (data.dateTime1[3] <= data.dateTime2[3] && data.dateTime1[4] > data.dateTime2[4])) {
          wx.showToast({
            title: '结束时间不能早于开始时间',
            icon: 'none',
            duration: 2000
          })
        } else {
          this.apply();
        }
      } else {
        this.apply();
      }
    } else {
      wx.showToast({
        title: '结束日期不能早于开始日期',
        icon: 'none',
        duration: 2000
      })
    }
  },
  apply: function () {
    var data = this.data;
    wx.request({
      url: 'http://127.0.0.1:8080/apply/applySub',
      data: {
        stu_id: data.id,
        issue: data.issue,
        transport: data.transport,
        place: data.place,
        start_time: data.date1,
        end_time: data.date2
      },
      success: function (d) {
        if (d.data == "申请成功") {
          wx.showToast({
            title: d.data,
            icon: 'success',
            duration: 2000,
            success: function () {
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
  chooseTransport: function () {
    this.setData({
      type: 'transport',
      typeTitle: '交通方式',
      maskWindowList: ['飞机', '动车', '火车', '大巴', '私家车', '自行车', '步行', '其他（输入）']
    })
    this.showMaskWindow()
  },

  //弹框以外区域点击
  maskWindowBgClick: function (e) {
    this.dismissMaskWindow();
  },

  //弹窗区域点击事件
  clickTap: function (e) {

  },

  //切换选择项事件
  maskWindowTableSelect: function (e) {
    var index = e.currentTarget.dataset.windowIndex;
    this.setData({
      selectIndex: e.currentTarget.dataset.windowIndex,
      isMaskWindowInputShow: index == 7
    })
  },

  //输入框输入绑定事件
  maskWindowInput: function (e) {
    var value = e.detail.value;
    this.setData({
      maskWindowInputValue: value
    })
  },

  maskWindowOk: function (e) {
    var index = this.data.selectIndex;
    var text;
    if (this.data.type == 'transport') {
      if (index == 7) {
        text = this.data.maskWindowInputValue;
      } else {
        text = this.data.maskWindowList[index];
      }
      this.setData({
        transport: text
      })
    }
    this.dismissMaskWindow();
  },

  maskWindowCancel: function (e) {
    this.dismissMaskWindow();
  },

  // 显示蒙版弹窗
  showMaskWindow: function () {
    this.setData({
      isMaskWindowShow: true,
      selectIndex: -1,
      isMaskWindowInputShow: false,
      maskWindowInputValue: ""
    })
  },

  // 隐藏蒙版窗体
  dismissMaskWindow: function () {
    this.setData({
      isMaskWindowShow: false,
      selectIndex: -1,
      isMaskWindowInputShow: false,
      maskWindowInputValue: ""
    })
  },
  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj2 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray1 = obj1.dateTimeArray.pop();
    var lastTime1 = obj1.dateTime.pop();
    var lastArray2 = obj2.dateTimeArray.pop();
    var lastTime2 = obj2.dateTime.pop();
    obj2.dateTime[3] += 2
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime,
      dateTimeArray2: obj2.dateTimeArray,
      dateTime2: obj2.dateTime,
    });
  },
  changeDate(e) {
    this.setData({
      date: e.detail.value
    });
  },
  changeTime(e) {
    this.setData({
      time: e.detail.value
    });
  },
  changeDateTime(e) {
    this.setData({
      dateTime: e.detail.value
    });
  },
  changeDateTime1(e) {
    this.setData({
      dateTime1: e.detail.value
    });
  },
  changeDateTime2(e) {
    this.setData({
      dateTime2: e.detail.value
    });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime,
      dateArr = this.data.dateTimeArray;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1,
      dateArr = this.data.dateTimeArray1;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },
  changeDateTimeColumn2(e) {
    var arr = this.data.dateTime2,
      dateArr = this.data.dateTimeArray2;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray2: dateArr,
      dateTime2: arr
    });
  }
})