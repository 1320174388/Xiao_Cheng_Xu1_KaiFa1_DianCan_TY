// pages/Admin/MenuManage/updateCity/index.js
var config = require('../../../../config');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_value:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'order_value': wx.getStorageSync('order_value'),
    });
    wx.removeStorageSync('order_value');
    
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
  // 修改地址
  formSubmit:function(e){
    console.log(e);
    var update_addres = e.detail.value;
    var id = update_addres.id;
    var order_addr = update_addres.order_addr;
    var ordertake = wx.getStorageSync('ordertake');
    ordertake[id] = {
      order_addr: order_addr
    };
    wx.setStorageSync('ordertake', ordertake);
    app.point('修改成功', "success");
    app.timeBack(2000);
 }
})