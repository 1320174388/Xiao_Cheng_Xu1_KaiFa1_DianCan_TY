// pages/manage/list/index.js
var config = require('../../../../config');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    role_id: null,
    firstPerson: '暗提示',
    array: null,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      "array": wx.getStorageSync('jurisdiction')
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

  /**
   * 添加管理员
   */
  formSubmit: function (e) {

    var admin_id = e.detail.value.admin_id;
    var admin_name = e.detail.value.admin_name;
    var role_id = e.detail.value.role_id;

    if (!admin_name) {
      return app.point('请输入管理员名称', "none");
    }

    if (!role_id) {
      return app.point('请选择职位', "none");
    }

    var management = wx.getStorageSync('management');
    var jurisdiction = wx.getStorageSync('jurisdiction');
    var role_name = jurisdiction[role_id].role_name;
    management[management.length] = { id: 666, "admin_name": admin_name, "role_name": role_name };

    wx.setStorageSync('management', management);
    wx.removeStorageSync('admin_value');
    app.point('添加成功', "success");
    app.timeBack(1000);
  }
})