// pages/Admin/manage/index.js
var config = require('../../../../config.js');
var app = getApp();
var time=null;
var a = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:null,
    select:false,
    selected:true,
    desk:null,
    shop:null,
    table_id:null,
    showModalStatus: "hide",
    shoopCode:null,
    img_url: wx.getStorageSync('img_url'),
    shoopCode: "../../../../icon/201634153158007.jpg" ,
  },
  /**
     * 弹出层函数
     */
  //出现
  longTap: function (e) {
    a = 1;
    var This = this;
    var index = e.currentTarget.dataset.tabltnum;
    var desk = this.data.desk;
    for (var i in desk) {
      desk[i]['hidden'] = true;
    };
    desk[index].hidden = false;
    this.setData({
      desk: desk
    });
    clearTimeout(time);
    time = setTimeout(function () {
      a = 0;
      for (var i in desk) {
        desk[i]['hidden'] = true;
      }
      This.setData({
        desk: null,
        desk: desk
      });
    }, 3000);
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //店铺信息
    this.setData({
      shop: wx.getStorageSync('shop')
    });
    // 座号管理
    var desks = wx.getStorageSync('desk');
      for (var i in desks) {
        desks[i]['hidden'] = true;
      }
      this.setData({
        desk: desks,
      });
      //图片
      var This = this;
      setInterval(function(res){
        if (This.data.img_url != wx.getStorageSync('img_url')) {
          This.setData({
            img_url: wx.getStorageSync('img_url'),
          });
        }
      },500);
      
  },

//修改座号
  hideup: function (e) {
    console.log(e);
    wx.setStorageSync('table_info', e.currentTarget.dataset);
    app.baseUrl('/pages/Admin/Shop/seatupdate/index');
  },
// 删除座号
  hidedel: function (e) {
    var deldesk=this.data.desk;
    delete deldesk[e.currentTarget.dataset.editid];
    wx.setStorageSync('desk', deldesk);
    this.onLoad();
    
  },
// 二维码
  tap:function(e){
    this.setData({
      showModalStatus: "show"
    })
   
  },
  close: function () {
    this.setData({
      showModalStatus: "hide"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  },
  select:function(e){
    if ('w' == e.currentTarget.dataset.w){
       this.setData({
         select: false,
         selected: true
       })
    } else if ('y' == e.currentTarget.dataset.y){
        this.setData({
          select: true,
          selected: false
        })
     }
  },
  // 修改店铺信息
  edits:function(e){
    wx.setStorageSync('shop_value',e.detail.value);
    var shop_img = this.data.img_url;
    wx.setStorageSync('shop_img', this.data.img_url);
    console.log(this.data.img_url);
    wx.navigateTo({
      url: '/pages/Admin/Shop/message/index'
    })
  },
  // 添加桌号
  seats:function(){
    wx.navigateTo({
      url: '/pages/Admin/Shop/seat/index',
    })
  }
})