// pages/Admin/cate/cate.js
var config = require('../../../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  formSubmit:function(e){
    var name= e.detail.value.class_name;
    var sort= e.detail.value.class_sort
    wx.request({
      url: config.service.addMenu, //仅为示例，并非真实的接口地址
      data: {
        "token": wx.getStorageSync('token'),
        "class_name":name,
        "class_sort":sort
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if (res.data.errNum == 0) {
          app.point("成功", "success");
          setTimeout(function () {
            var pages = getCurrentPages(); // 当前页面  
            var beforePage = pages[pages.length - 2]; // 前一个页面 
            wx.navigateBack({
              success: function () {
                beforePage.onLoad(); // 执行前一个页面的onLoad方法  
              }
            })
          }, 1000);

        } else if (res.data.errNum == 1) {
          app.point("对不起,您不是管理员身份", "none");
        } else if (res.data.errNum == 2) {
          app.point("没有填写食品分类名称", "none");
        } else if (res.data.errNum == 3) {
          app.point("有填写食品分类排序", "none");
        } else if (res.data.errNum == 4) {
          app.point("管理员名称已存在", "none");
        } else {
          app.point("添加失败", "none");
        };
       
      }
    })
  }
})