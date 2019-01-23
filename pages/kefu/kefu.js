// pages/kefu/kefu.js
// var city = require('./city.js');
var amapFile = require('../../libs/amap-wx.js');
Page({
  data: {
    region: [],
    detailed: '请选择',
    customItem: ["全部"],
    clas: 'ccc',
    weather: {}
  },
  bindRegionChange: function (e) {
    var that = this
    //为了让选择框有个默认值，    that.setData({
    clas: ''
  // })　　　//下拉框所选择的值
  console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      //拼的字符串传后台
      detailed: e.detail.value[0] + "," + e.detail.value[1] + "," + e.detail.value[2],
      //下拉框选中的值
      region: e.detail.value
    })
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