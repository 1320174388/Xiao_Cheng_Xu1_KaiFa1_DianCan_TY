// pages/Admin/index/index.js
var config = require('../../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [
      {
        "id": "X",
        "right_name": "职位管理",
        "right_route": "/pages/Admin/Authority/updatePower/index"
      },
      {
        "id": "A",
        "right_name": "管理列表",
        "right_route": "/pages/Admin/Management/updateManage/index"
      },
      {
        "id": "1",
        "right_name": "店铺管理",
        "right_route": "/pages/Admin/Shop/manage/index"
      },
      {
        "id": "2",
        "right_name": "菜品管理",
        "right_route": "/pages/Admin/Variety/menu/index"
      },
      {
        "id": "3",
        "right_name": "订单管理",
        "right_route": "/pages/Admin/MenuManage/orderManage/index"
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    /**
     * 模块信息数据
     */
    var moduleinformation = [
      { id: 1, right_name: '店铺管理' },
      { id: 2, right_name: '菜品管理' },
      { id: 3, right_name: '订单管理' }
    ];
    wx.setStorageSync('moduleinformation', moduleinformation);

    /**
     * 职位管理 数据信息
     */
    var jurisdiction = [
      { id: 2, role_name: '二级管理员' },
      { id: 3, role_name: '三级管理员' }
    ];
    wx.setStorageSync('jurisdiction', jurisdiction);

    /**
     * 管理列表 数据信息
     */
    var management = [
      { id: 1, admin_name: '烟雨楼', role_name: '二级管理员' },
      { id: 2, admin_name: '半山妖', role_name: '三级管理员' }
    ];
    wx.setStorageSync('management', management);

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
  tiao:function(){
    wx.navigateTo({
      url:'../list/index'
    })
  }
})