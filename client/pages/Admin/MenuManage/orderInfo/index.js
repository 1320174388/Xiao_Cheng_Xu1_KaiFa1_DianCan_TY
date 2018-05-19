var config = require('../../../../config');
var app = getApp();
// pages/Admin/MenuManage/orderInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_info: [
      {
        oid: 1, food_img: config.index.host_image_url+'/cai1.jpg', food_name: '鱼香肉丝',
        food_number: '1', order_price: '0.1'
      },
    ],
    order_num:1,
    order_print:0.1,
    host: config.service.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var THIS = this;
    app.post(
      config.order.orderInfo, {
        'token': wx.getStorageSync('token'),
        'order_number': wx.getStorageSync('order_id')
      }, function (res) {
        if (res.data.errNum == 1) {
          THIS.setData({
            order_info: res.data.retData.order_info,
            order_num: res.data.retData.order_num,
            order_print: res.data.retData.order_print
          });
        }
      }
    );
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