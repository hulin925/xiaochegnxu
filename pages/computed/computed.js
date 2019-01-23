// pages/computed/computed.js
const app = getApp()

Page({
  data:{
    datalist:null
  },
  onLoad:function(){
    var that=this;
    wx.request({
      url:"https://fy.sanhedao.com.cn/index.php/Iapi/order/showall",
      header:{
        'content-type':'application/json'
      },
      // complete: function (res) {
      //   var data=res.data.data
      //   console.log(data)
      //   that.setData({
      //     datalist: data
      //   });
      //   if (res == null || res.data == null) {
      //     reject(new Error('网络请求失败'))
      //   }
      // },
      success:function(res){
        var data=res.data.data
        that.setData({
          datalist:data
        })
        console.log(that.data.datalist)
      }
    })
  }
})