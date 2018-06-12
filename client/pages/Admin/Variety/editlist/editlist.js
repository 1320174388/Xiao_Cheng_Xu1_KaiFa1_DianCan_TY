var config = require('../../../../config.js');
var app = getApp();
// 滚动选择器
var picker_value = 0;
// pages/Admin/addlist/addlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo: {},
    image_url: null,
    image_true:null,
    classlist: [
      { id: 1, class_name: '蔬菜' },
      { id: 2, class_name: '热菜' },
      { id: 1, class_name: '凉菜' },
    ],
    editfoods:''
  },
  // 表单提交事件
  formSubmit:function(e){
    var This = this;
    var classlist = This.data.classlist;
    var class_id = classlist[picker_value].id;
    if (this.data.image_true) {
        This.data.image_url;
        var update_datas = e.detail.value;
        var index_id = wx.getStorageSync('index_id');
        var class_id = class_id;
        var food_info = update_datas.food_info;
        var food_name = update_datas.food_name;
        var food_price = update_datas.food_price;
        var food_sort = update_datas.food_sort;
        var id = update_datas.id;
        var food_img = This.data.image_url;
        var datas = wx.getStorageSync('datas');
        datas[index_id] = {
          class_id: class_id, food_info: food_info, food_name: food_name, food_price: food_price,
          food_sort: food_sort, id: id, food_img: food_img
        };
        wx.setStorageSync('datas', datas);
        app.point('修改成功', "success");
        app.timeBack(2000);
    }else{ 
      //没有传入图片
      var update_datas = e.detail.value;
      var index_id = wx.getStorageSync('index_id');
      var class_id = class_id;
      var food_info = update_datas.food_info;
      var food_name = update_datas.food_name;
      var food_price = update_datas.food_price;
      var food_sort = update_datas.food_sort;
      var id = update_datas.id;
      var datas = wx.getStorageSync('datas');
      datas[index_id] = {
        class_id: class_id, food_info: food_info, food_name: food_name, food_price: food_price,
        food_sort: food_sort, id: id
      };
      wx.setStorageSync('datas', datas);
      app.point('修改成功', "success");
      app.timeBack(2000);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      editfoods: wx.getStorageSync('editfoods'),
      image_url: config.service.host + wx.getStorageSync('editfoods').food_img
    });
    // var This = this;
    // app.post(
    //   config.service.foods, {
    //     "token": wx.getStorageSync('token'),
    //   }, function (res) {
    //     if (res.data.errNum == 0) {
    //       This.setData({
    //         classlist: res.data.retData
    //       });
    //     };
    //   }
    // );
  },
  // 图片上传代码
  image: function () {
    var This = this;
    app.imageAdd(function (res) {
      This.setData({
        image_url: res.tempFilePaths[0],
        image_true: true
      });
    });
  },
  // 选择分类
  slide_change: function (res) {
    picker_value = res.detail.value[0];
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