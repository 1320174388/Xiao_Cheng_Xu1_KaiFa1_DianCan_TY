// pages/Admin/cate/cate.js
var config = require('../../../../config.js');
var app = getApp();
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
  // 添加菜品分类
  formSubmit:function(e){
    var class_name = e.detail.value.class_name;
    var class_sort = e.detail.value.class_sort;
    var foodclass = wx.getStorageSync('foodclass');
    foodclass[foodclass.length] = { class_name: class_name, class_sort: class_sort };
    wx.setStorageSync('foodclass', foodclass);
    wx.removeStorageSync('value');
    app.point('添加成功', "success");
    app.timeBack(2000);
  }
})