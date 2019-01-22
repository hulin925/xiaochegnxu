//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    topImg:null,
    loading:false,
    indicatorActiveColor: "rgba(40,216,241,.6)",
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    navImg:[
      {
        img: "/images/jilu.png",
        texts:"客户案列",
        id:"11",
        url:"../xiangqin/xiangqin"
      },
      {
        img: "/images/sjs.png",
        texts: "设计师",
        id: "12",
        url: "../xiangqin/xiangqin"
      },
      {
        img: "/images/hxys.png",
        texts: "核心优势",
        id: "13",
        url: "../computed/computed"
      },
      {
        img: "/images/about.png",
        texts: "关于我们",
        id: "14",
        url: "../computed/computed"
      },
    ],
    Url :[
      "/pages/tiaoz/tiaoz",
      "/pages/tiaoz/tiaoz",
      "/pages/tiaoz/tiaoz",
      "/pages/tiaoz/tiaoz"
    ]
  },
  navito: function (e) {
    // 点击不同的列表跳转到列表详情
    var that = this;
    var id = e.currentTarget.dataset.objecte - 10;
    wx.navigateTo({//对应的是app.json里面的pages。加上底部的对应渲染
      url: that.data.Url[id]
    });
  },
  jumpPage:function(){
    wx.navigateTo({//跳转新的页面,用这个不能把文件名写在app.json的pages数组里，不然不会渲染
      url: "/pages/tiaoz/tiaoz"
    })
    this.setData({
      loading:true
    })

      // wx.showToast({ // 显示Toast,信息提示

      //   title: '已发送',

      //   icon: 'success',

      //   duration: 1500

      // })

      // wx.hideToast() // 隐藏Toast


    //模态对话框
    wx.showModal({

      title: '普通提示弹框',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function (res) {

        if (res.confirm) {


          // console.log('用户点击主操作')

        } else if (res.cancel) {

          // console.log('用户点击次要操作')

        }

      }

    })
  },
  onLoad:function(){
    var that=this;
    wx.request({

      url: 'http://jz.sanhedao.com.cn/index.php/Index/index',

      success: function (res) {
        var datas = res.data.data.indextop_pic_list;
        var dataList=datas.map((item,index)=>{
          return item[1]
        })
        that.setData({
          topImg:dataList
        })
        console.log(that.data.topImg)
      }
      
    })
  },
  onPullDownRefresh: function () {

    // 用户触发了下拉刷新操作

    // 拉取新数据重新渲染界面

    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。

  },
  onReachBottom: function () {

    // 当界面的下方距离页面底部距离小于100像素时触发回调
    // console.log(this.data.topImg)
  
  },

  onLaunch() {
    console.log('onLaunch监听小程序初始化');
  },

  onShow() {
    console.log('onShow监听小程序显示');
  },

  onHide() {
    console.log('onLaunch监听小程序隐藏');
  }

})