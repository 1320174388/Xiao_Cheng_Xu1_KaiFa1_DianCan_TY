// pages/Admin/Management/updateAdmin/index.js
var config = require('../../../../config');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      { id: 1, role_name: '二级管理员' }
    ],
    admin_value:'',
    admin_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态赋值
    this.setData({
      'admin_value': wx.getStorageSync('value'),
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
   * 修改管理员
   */
formSubmit:function(e){

  var admin_id   = e.detail.value.admin_id;
  var admin_name = e.detail.value.admin_name;
  var role_id    = e.detail.value.role_id;

  if (!role_id){
    return app.point('请选择职位', "none");
  }

  var management = wx.getStorageSync('management');
  var jurisdiction = wx.getStorageSync('jurisdiction');
  var role_name = jurisdiction[role_id].role_name;
  management[e.detail.value.admin_id] = { id: 2, "admin_name": admin_name, "role_name": role_name };

  wx.setStorageSync('management', management);
  wx.removeStorageSync('admin_value');
  app.point('修改成功', "success");
  app.timeBack(1000);

 }
})