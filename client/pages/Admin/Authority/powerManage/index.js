// pages/power/list/index.js
var config = require('../../../../config');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPerson: true,
    selectArea: false,
    array: [
      { id: 1, right_name: '店铺管理' },
      { id: 2, right_name: '菜品管理' },
    ],
    arrayList: null,
    update_value:'',
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

// form提交
  formSubmit:function(e){
    // 添加职位
    console.log(e.detail.value.roleName);
    var roleName = e.detail.value.roleName;
    var right = e.detail.value;
    delete right['roleName'];
    var assync_c = 0;
    for (var key in right) {
      if (right[key] == true) {
        right['right' + assync_c] = key;
      }
      delete right[key];
      assync_c++;
    };
    var arr = ''
    for (var i in right) {
      arr += right[i]; //属性
    }
    if (arr == '') {
      return app.point('请选择管理权限', "none");
    }
    var jurisdiction = wx.getStorageSync('jurisdiction');
    jurisdiction[jurisdiction.length] = { id: 666, role_name: roleName };
    wx.setStorageSync('jurisdiction', jurisdiction);
    wx.removeStorageSync('value');
    app.point('添加成功', "success");
    app.timeBack(2000);
  }
})