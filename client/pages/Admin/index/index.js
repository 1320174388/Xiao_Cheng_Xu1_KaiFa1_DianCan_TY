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

  /**
   * 店铺信息列表 数据信息
   */
   var shop = [
     {
       id: 1, shop_name: '半山妖快餐店', shop_addr: '中国大陆', shop_phone: '1005440',
       shop_info: '半山妖快餐店,中国唯一牛逼快餐店'
     }
    ];
    wx.setStorageSync('shop', shop);
   /**
    * 店铺座号管理 数据信息
    */
   var desk = [
     {
       id: 1, src: '../../../../icon/desk.jpg', table_number: '1'
     },
     {
       id: 1, src: '../../../../icon/desk.jpg', table_number: '2'
     },
     {
       id: 1, src: '../../../../icon/desk.jpg', table_number: '3'
     },
     {
       id: 1, src: '../../../../icon/desk.jpg', table_number: '4'
     },
   ];
   wx.setStorageSync('desk', desk);
   /**
    * 菜品分类 数据信息
    */
    var foodclass = [
     { id: 1, class_name: '蔬菜', class_sort: '1' },
     { id: 2, class_name: '热菜', class_sort: '2' },
     { id: 3, class_name: '凉菜', class_sort: '3' },
   ];
    wx.setStorageSync('foodclass', foodclass);
    /**
     * 菜品分类下的图片 数据信息
     */
    var img_url = [
      { sid: 1, shop_img: '../../../../icon/1.jpg' },
      { sid: 2, shop_img: '../../../../icon/2.jpg' },
      { sid: 3, shop_img: '../../../../icon/3.jpg' },
      { sid: 4, shop_img: '../../../../icon/3.jpg' },
      { sid: 5, shop_img: '../../../../icon/1.jpg' },
      { sid: 6, shop_img: '../../../../icon/2.jpg' },
    ];
    wx.setStorageSync('img_url', img_url);
    /**
     * 菜品分类 数据信息
     */
    var datas = [
      {
        id: 1, food_img: '../../../../icon/cai1.jpg', food_name: '娃娃菜', food_sort: '1',
        food_price: '0.1'
      },
      {
        id: 2, food_img: '../../../../icon/cai2.jpg', food_name: '鱼香肉丝', food_sort: '2',
        food_price: '0.1'
      },
      {
        id: 3, food_img: '../../../../icon/menu.jpg', food_name: '拍黄瓜', food_sort: '3',
        food_price: '0.1'
      },
    ];
    wx.setStorageSync('datas', datas);
    /**
     * 就餐订单 数据信息
     */
    var orderlist = [
      {
        id: 1, order_number: '20180514205402202306864', order_status: 1,
        user_id: '2', order_remarks: '正常', table_id: '3', order_time: '20180514 20:54'
      }
    ];
    wx.setStorageSync('orderlist', orderlist);
    /**
     * 点餐订单 数据信息
     */
    var orderqucan = [
      {
        id: 1, order_number: '20180514205402202306864', order_status: 1,
        user_id: '2', order_remarks: '正常', take_time: '2018-05-17 15:20',
        order_time: '20180514 20:54'
      }
    ];
    wx.setStorageSync('orderqucan', orderqucan);
    /**
     * 历史订单
     */
    var orderhist = [
      {
        id: 1, order_number: '20180514205402202306864', order_status: 1,
        user_id: '2', order_remarks: '正常', order_type: 'eat',
        order_time: '20180514 20:54'
      }
    ];
    wx.setStorageSync('orderhist', orderhist);
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