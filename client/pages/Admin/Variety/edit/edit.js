// pages/Admin/Variety/edit/edit.js
var config = require('../../../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var value = wx.getStorageSync('key')
    this.setData({
      datas:value
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
  
  },
  formSubmit(e){
    var update_foodclass = e.detail.value;
    var id = wx.getStorageSync('id');
    var class_name = update_foodclass.class_name;
    var class_sort = update_foodclass.class_sort;
    var foodclass = wx.getStorageSync('foodclass');
    foodclass[id].class_name = class_name;
    foodclass[id].class_sort = class_sort;
    wx.setStorageSync('foodclass', foodclass);
    app.point('修改成功', "success");
    app.timeBack(2000);
  }
})