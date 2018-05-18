var config = require('../../../../config');
var app = getApp();
// pages/Admin/MenuManage/orderManage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 订单管理导航条
    navbar: ['就餐', '点餐' , '历史'],
    currentTab: 0,
    orderlist:null,
    ordertake:null,
    orderhist:null,
    orderqucan:null, 
  },
  // 获取订单详情信息
  orderinfo:function(e){
    wx.setStorageSync('order_id', e.currentTarget.dataset.order_id);
    app.baseUrl('/pages/Admin/MenuManage/orderInfo/index');
  },
  // 修改座号
  updateorder:function(e){
    wx.setStorageSync('order_id', e.currentTarget.dataset);
    app.baseUrl('/pages/Admin/MenuManage/updateNumber/index');
  },
  // 修改地址
  updateorderaddr:function(e){
    wx.setStorageSync('order_value', e.currentTarget.dataset);
    app.baseUrl('/pages/Admin/MenuManage/updateCity/index');
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //就餐订单
    this.setData({
      orderlist: wx.getStorageSync('orderlist')
    });
    //点餐订单
    this.setData({
      orderqucan: wx.getStorageSync('orderqucan')
    });
    //预约订单
    this.setData({
      ordertake: wx.getStorageSync('ordertake')
    });
    //历史订单
    this.setData({
      orderhist: wx.getStorageSync('orderhist')
    });
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