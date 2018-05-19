// pages/My/my.js
var config = require('../../../config.js');
var app = getApp();
var headimg = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:true,
    imghost: config.service.imghost,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    Navigation:[
      {
        'Navigation_Name':'首页',
        'Navigation_Bind': 'bindtapnNavigateTo',
        'Navigation_class1': 'imgdiancan',
        'Navigation_class2': 'context-shouye',
        'Navigation_class3': 'shouyeimg',
        'Navigation_To': '/pages/Home/index/index',
        'Navigation_Img_url': config.index.host_image_url + '/My.png',
      },
      {
        'Navigation_Name': '点餐',
        'Navigation_Bind': 'bindtapnNavigateTo',
        'Navigation_class1': 'imgyuding',
        'Navigation_class2': 'context-diancan',
        'Navigation_class3': 'img',
        'Navigation_To': '/pages/Home/SelectionFood/orderMenu/index',
        'Navigation_Img_url': config.index.host_image_url + '/dfood.png',
      },
      {
        'Navigation_Name': '订单',
        'Navigation_Bind': 'bindtapnNavigateTo',
        'Navigation_class1': 'imgwaimai',
        'Navigation_class2': 'context-diancan',
        'Navigation_class3': 'img',
        'Navigation_To': '/pages/Home/Order/orderNumber/index',
        'Navigation_Img_url': config.index.host_image_url + '/order1.png',
      },
      {
        'Navigation_Name': '预约',
        'Navigation_Bind': 'dianhua',
        'Navigation_class1': 'imgpaidui',
        'Navigation_class2': 'context-diancan',
        'Navigation_class3': 'img',
        'Navigation_Img_url': config.index.host_image_url + '/time.png',
      },
    ]
  },
  // 头像点击事件获取用户ID
  headpic:function(){
    if (headimg==6){
      app.point('你的ID为：00544','none',5000);
      headimg=0;
    }else{
      headimg++;
    }
  },

  /**
   * 页面跳转
   */
  bindtapnNavigateTo:function(res){
    wx.switchTab({
      url: res.currentTarget.dataset.navigation_to
    })
  },

  /**
   * 电话
   */
  dianhua:function(res){
    app.point('联系电话：010-86220269','none',3000);
    wx.makePhoneCall({
      phoneNumber: '010-86220269' //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  
  }
})