// pages/manage/add/index.js
var config = require('../../../../config');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: null,
    admin_id:null,
    admin_name:null,
    role_id:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      array: wx.getStorageSync('management')
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
  // 添加按钮
  adds:function(){
    app.baseUrl('/pages/Admin/Management/addManage/index');
  },

  //修改
  addSubmit: function (e) {
    wx.setStorageSync('value', e.detail.value);
    app.baseUrl('/pages/Admin/Management/updateAdmin/index');
  },

  //删除
  deleteClick: function (e) {
    console.log(e.currentTarget.dataset.editid)
    var delarray = wx.getStorageSync('management');
    delete delarray[e.currentTarget.dataset.editid];
    wx.setStorageSync('management', delarray);
    this.onLoad();
  }
})