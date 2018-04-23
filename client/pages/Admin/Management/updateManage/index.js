// pages/manage/add/index.js
var config = require('../../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: null,
    admin_id:null,
    admin_name:null,
    role_id:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var THIS = this
    wx.request({
      url: config.service.getAdmin,
      data: {
        'token': wx.getStorageSync('token')
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        if (res.data.retData) {
          THIS.setData({
            array: res.data.retData.list
          });
        };
        console.log(res.data);
      }
    })
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
  // 添加按钮
  adds:function(){
    wx.navigateTo({
      url: '/pages/Admin/Management/addManage/index'
    })
  },

  //修改
  addSubmit: function (e) {
    wx.setStorageSync('value', e.detail.value);
    console.log('value');
    wx.navigateTo({
      url: '/pages/Admin/Management/updateAdmin/index',
    })

  },

  //删除

  deleteClick: function (event) {
    var user_id = event.currentTarget.dataset.editid;
    console.log(user_id);
    wx.request({
      url: config.service.delPosition,
      data: {
        'token': wx.getStorageSync('token'),
        'user_id': user_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {

        console.log(res);

      }
    }),
      wx.navigateTo({
        url: "/pages/Admin/Authority/updatePower/index",
      })
  }
})