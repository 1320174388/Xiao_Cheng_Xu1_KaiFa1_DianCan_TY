// pages/Home/success/index.js
var config = require('../../../../config.js');
var app = getApp();
var order_bindtap_type = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payLoser: null,
    imghost: config.service.host
  },
  // 取消订单
  exitOrder: function () {
    wx.switchTab({
      url: '/pages/Home/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      food_list_info: wx.getStorageSync('food_list_info'),
      food_list_beizhu: wx.getStorageSync('food_list_beizhu') ? wx.getStorageSync('food_list_beizhu') : '',
      food_list_order_number: wx.getStorageSync('food_list_order_number')
    });
    var payLoser = wx.getStorageSync('payLoser');
    this.setData({
      payLoser: payLoser,
    }),
      wx.removeStorageSync('payLoser');
  },
  // 继续点餐
  playon: function () {
    wx.switchTab({
      url: '/pages/Home/SelectionFood/orderMenu/index',
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

  }
})