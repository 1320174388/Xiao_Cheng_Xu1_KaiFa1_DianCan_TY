var config = require("../../../../config.js");
var app = getApp();
var myDate = new Date();
var order_bindtap_type = 0;
// pages/Home/submit/intoroom/index.js
Page({

  /**food_list_order_number
   * 页面的初始数据
   */
  data: {
    host: config.service.host,
    table_base: '请扫描座号',
    table_number: null,
    open: true,
    close: false,
    dates: '选择日期',
    times: '选择时间',
    index: 0,
    beizhu: null
  },
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  // 单选按钮
  showitem: function () {
    this.setData({
      open: true,
      close: false,
      order_type: 'eat'
    })
  },
  showitems: function () {
    this.setData({
      close: true,
      open: false,
      order_type: 'take'
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var This = this;

    var Y = myDate.getFullYear();
    var m = myDate.getMonth() + 1;
    var d = myDate.getDate();

    if (m < 10) { m = "0" + m; }
    if (d < 10) { d = "0" + d; }

    var H = myDate.getHours() + 1;
    var i = myDate.getMinutes()

    if (H < 10) { H = "0" + H; }
    if (i < 10) { i = "0" + i; }

    This.setData({
      food_info_arr: wx.getStorageSync('food_info_arr'),
      dates: Y + "-" + m + "-" + d,
      times: H + ":" + i
    });

    setInterval(function (res) {
      This.setData({
        food_info_arr: wx.getStorageSync('food_info_arr'),
      });
    }, 500);
    This.setData({
      shop_addr: '北京市海淀区高里掌路1号院',
    });
  },

  /**
   * 扫描二维码
   */
  ScanCode: function (e) {
    var This = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        This.setData({
          table_number: res.result,
          table_base: res.result + '号座就餐'
        });
      }
    })
  },

  /**
   * 名称：BeiZhuXinXi
   * 功能：获取备注信息
   */
  BeiZhuXinXi: function (event) {
    this.setData({
      beizhu: event.detail.value
    });
  },
  /**
   * 提交订单信息
   */
  submit_order: function (e) {
    if (order_bindtap_type > 0) {
      return false;
    }
    order_bindtap_type++;
    app.point('支付中', 'loading', 72000000);
    var This = this;
    var order_number = ''+myDate.getFullYear() + (myDate.getMonth() + 1) + myDate.getDate()+(myDate.getHours() + 1) + myDate.getMinutes();
    setTimeout(function(res){
      wx.setStorageSync("payLoser", true);
      var food_list_info = wx.getStorageSync('food_info_arr');
      wx.removeStorageSync('food_info_arr');
      wx.setStorage({
        key: 'food_list_info',
        data: food_list_info,
      })
      wx.setStorage({
        key: 'food_list_beizhu',
        data: This.data.beizhu,
      })
      wx.setStorage({
        key: 'food_list_order_number',
        data: order_number,
      })
      order_bindtap_type--;
      wx.reLaunch({
        url: '/pages/Home/SelectionFood/payMoney/index',
      })
    },3000); 
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