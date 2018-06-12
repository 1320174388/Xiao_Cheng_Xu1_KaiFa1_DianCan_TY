var config = require('../../../config');
var app = getApp();
Page({
  data: {
    host:config.index.host,
    // imgUrls: null,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      { sid: 1, src: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/lun1.png' },
      { sid: 2, src: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/1.jpg' },
      { sid: 3, src: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/2.jpg' }
    ],
    tuijian:[
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img:'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg'},
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' },
      { id: 1, food_name: '巧扮苦菊', food_price: '14.00', food_img: 'https://lg-3fm9mghs-1253290031.cos.ap-shanghai.myqcloud.com/cai1.jpg' }
    ],
  },
  onLoad: function () {
    
  },
  tell:function(){
    app.point('联系电话：010-86220269', 'none', 3000);
    wx.makePhoneCall({
      phoneNumber: '010-86220269' //仅为示例，并非真实的电话号码
    })
  },
  maps: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "花园桥肯德基",
          address:"十三陵景区",
          scale: 28
        })
      }
    })
  },
  // 点餐小图标跳转
  diancan:function(){
    wx.navigateTo({
      url: '/pages/Home/OrderFood/orderMenu/index',
    })
  },
  // 图片跳转
  imgOrder: function () {
    wx.navigateTo({
      url: '/pages/Home/SelectionFood/imgOrder/index',
    })
  },
  // 拨打电话
  phone_dlth: function () {
    wx.makePhoneCall({
      phoneNumber: '010-86220269'
    })
  },

  onShareAppMessage:function(){
    
  }
})