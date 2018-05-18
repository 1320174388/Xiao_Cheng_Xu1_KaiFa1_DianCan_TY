var config = require('../../../../config.js');
var app = getApp();
// pages/Admin/addlist/addlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo: {},
    image_url: '/icon/uppic.png',
    classlist:[
      { id: 1, class_name:'蔬菜'},
      { id: 2, class_name: '热菜' },
      { id: 1, class_name: '凉菜' },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 图片上传代码
   */
  image: function () {
    var This = this;
    app.imageAdd(function (res) {
      This.setData({
        image_url: res.tempFilePaths[0]
      });
    });
  },

  /**
   * 添加菜品
   */
  formSubmit: function (e) {
    console.log(e);
    var This = this;
    This.data.image_url;
    var class_id = e.detail.value.class_id;
    var food_info = e.detail.value.food_info;
    var food_name = e.detail.value.food_name;
    var food_price = e.detail.value.food_price;
    var food_sort = e.detail.value.food_sort;
    var food_img = This.data.image_url;
    var datas = wx.getStorageSync('datas');
    datas[datas.length] = { class_id: class_id, food_info: food_info, food_name: food_name,
    food_price: food_price, food_sort: food_sort, food_img: food_img};
    wx.setStorageSync('datas', datas);
    wx.removeStorageSync('value');
    app.point('添加成功', "success");
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
})