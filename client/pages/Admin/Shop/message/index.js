var config = require('../../../../config.js');
var app = getApp();
// pages/Admin/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: config.service.host,
    shop_value:null,
    image_url:null,
    image_true:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shop_img = wx.getStorageSync('shop_img');
    var shop_imgs = []
    for (var n in shop_img) {
      shop_imgs[n] = {
        'shop_img':config.service.host+shop_img[n].shop_img
      }
    }
    this.setData({
      shop_value: wx.getStorageSync('shop_value'),
      image_url: shop_imgs
    });
  },
  image:function(){
    var THIS = this;
    wx.chooseImage({
      count: 6, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        if(res.tempFilePaths){
          var i = 0;
          var num = 1;
          var length = res.tempFilePaths.length;
          var tempFilePaths = res.tempFilePaths;
          var image_urls = [];
          for (var n = 0; n < tempFilePaths.length; n++) {
            image_urls[n] = [];
            image_urls[n] = {
              sid:n+1,
              'shop_img': tempFilePaths[n]
            }
          }
          wx.setStorageSync('img_url', image_urls);
          THIS.setData({
            image_url: image_urls
          });   
        }
      }
    })
  },
  formSubmit:function(e){
    var shop_value = e.detail.value;
    var shop_id = shop_value.shop_id;
    var shop_name = shop_value.shop_name;
    var shop_info = shop_value.shop_info;
    var shop_addr = shop_value.shop_addr;
    var shop_phone = shop_value.shop_phone;
    var shop = wx.getStorageSync('shop');
    shop[shop_id] = { id: shop_id, shop_name: shop_name, shop_info: shop_info, 
                      shop_addr:shop_addr, shop_phone: shop_phone};
    wx.setStorageSync('shop', shop);
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
  
  },
  maps:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
})