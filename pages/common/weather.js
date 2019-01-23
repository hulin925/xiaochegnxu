

var amapFile = require('../../libs/amap-wx.js');

Page({
  data: {
    weather: {}
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '24db44d271675bfcf47389aa044b31e2' });
    myAmapFun.getWeather({
      success: function (data) {
        //成功回调
        // console.log(data)
        that.setData({
          weather: data
        })
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  }
})