// pages/Admin/Shop/seatupdate/index.js
var config = require('../../../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    table_info: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'table_info': wx.getStorageSync('table_info'),
    });
    wx.removeStorageSync('table_info');
  },

  submit:function(e){
    console.log(e);
    var update_desk = e.detail.value;
    var table_id = update_desk.table_id;
    var table_number = update_desk.table_number;
    var desk = wx.getStorageSync('desk');
    desk[table_id].table_number = table_number;
    wx.setStorageSync('desk', desk);
    app.point('修改成功', "success");
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