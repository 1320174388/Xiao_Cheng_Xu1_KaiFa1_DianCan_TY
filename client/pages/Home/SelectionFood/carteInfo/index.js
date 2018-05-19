var config = require('../../../../config');
var app = getApp();
var type_number_status = 0;
// pages/Home/OrderFood/carteInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: config.service.host,
    food_info: null,
    food_info_arr: wx.getStorageSync('food_info_arr'),
    food_info_index: null,
    foods_number: null,
    foods_price: null,
    open: false,
    close: true,
    show: false,
    hidden: false,
    carlist: false,
  },
  carlist: function (e) {
    this.setData({
      carlist: !this.data.carlist
    })
  },
  showitemes: function () {
    this.setData({
      close: false,
      open: true,
    })
  },
  showitems: function () {
    this.setData({
      close: true,
      open: false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var This = this;
    setInterval(function (res) {
      This.setData({
        food_info: wx.getStorageSync('food_info'),
        food_info_arr: wx.getStorageSync('food_info_arr'),
        food_info_index: wx.getStorageSync('food_info_index'),
      });
    }, 500);
  },
  // submitCart
  submitCart: function (e) {
    if (type_number_status>0){
      return false;
    }
    type_number_status++;
    var key1 = this.data.currentTab;
    var key2 = e.currentTarget.dataset.index;
    var key3 = e.currentTarget.dataset.food_id;

    if (this.data.food_info_arr) {
      var food_info_arr = this.data.food_info_arr;
    } else {
      var food_info_arr = {
        foods_crat: [],
        foods_number: 0,
        foods_price: 0
      };
    }

    if (e.currentTarget.dataset.add) {
      if (food_info_arr.foods_crat[key3]) {
        ++food_info_arr.foods_crat[key3].food_number;
      } else {
        food_info_arr.foods_crat[key3] = this.data.food_info;
        food_info_arr.foods_crat[key3].food_number = 1;
      }
    }

    if (e.currentTarget.dataset.del) {
      if (food_info_arr.foods_crat[key3]) {
        --food_info_arr.foods_crat[key3].food_number;
        if (food_info_arr.foods_crat[key3].food_number == 0) {
          delete (food_info_arr.foods_crat[key3]);
        }
      }
    }

    if (app.isArrayNull(food_info_arr.foods_crat)) {
      food_info_arr.foods_number = app.orderCrat(food_info_arr.foods_crat, 'number');
      food_info_arr.foods_price = app.orderCrat(food_info_arr.foods_crat, 'price');
    } else {
      food_info_arr = null;
    }

    if (!food_info_arr.foods_crat[key3] && food_info_arr.foods_price == 0 && food_info_arr.foods_number == 0) {
      this.setData({
        food_info_arr: null,
      });
      wx.removeStorageSync('food_info_arr');
    } else {
      this.setData({
        food_info_arr: food_info_arr,
      });
      wx.setStorageSync('food_info_arr', food_info_arr);
    }
    type_number_status--;
  },
  // 清空
  showitemes: function () {
    this.setData({
      food_info_arr: null
    })
    wx.removeStorageSync('food_info_arr')
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
  // 结账
  end: function () {
    wx.navigateTo({
      url: '/pages/Home/SelectionFood/submitorder/index',
    })
  },
})