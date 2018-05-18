var config = require('../../../../config.js');
var app = getApp();
// pages/Admin/seat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 添加座号函数
   */
  submit:function(e){
    console.log(e.detail.value);
    var table_number = e.detail.value.table_number;
    var desk = wx.getStorageSync('desk');
    desk[desk.length] = { id: 4, src: '../../../../icon/desk.jpg', table_number: table_number };
    wx.setStorageSync('desk', desk);
    wx.removeStorageSync('value');
    app.point('添加成功', "success");
    app.timeBack(2000);
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