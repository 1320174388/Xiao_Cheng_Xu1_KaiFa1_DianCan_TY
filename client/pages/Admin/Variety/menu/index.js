// pages/Admin/menu/index/index.js
var config = require('../../../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    selected: true,
    showModalStatus: "hide",
    datas:null,
    host:null,
    foodclass:null,
    foodInfo:null,
    edits:null
  },
  // 删除菜品
  delfoods:function(e){
    var deldatas = this.data.datas;
    var This = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success:function(res){
        if(res.confirm){
          delete deldatas[e.currentTarget.dataset.id];
          wx.setStorageSync('datas', deldatas);
          app.point("删除成功", "success", 2000);
          This.onLoad();
        }
      }
    })
    
  },
  // 修改菜品信息
  editfoods:function(e){
    var i = e.currentTarget.dataset.index;
    wx.setStorageSync('index_id', e.currentTarget.dataset.index);
    wx.setStorageSync('editfoods', this.data.datas[i]);
    app.baseUrl('/pages/Admin/Variety/editlist/editlist');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodclass: wx.getStorageSync('foodclass')
    });
    this.setData({
      datas: wx.getStorageSync('datas')
    }) 
  },
  /**
   * 搜索菜品
   */
  search:function(e){
    var THIS = this;
    app.post(
      config.service.foodsList, {
        "token": wx.getStorageSync('token'),
        "food_name_search": e.detail.value.food_name_search
      }, function (res) {
        if (res.data.errNum == 0) {
          THIS.setData({
            host: config.service.host,
            datas: res.data.retData
          })
        }
      }
    );
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
  select: function (e) {
    if ('w' == e.currentTarget.dataset.w) {
      this.setData({
        select: false,
        selected: true
      })
    } else if ('y' == e.currentTarget.dataset.y) {
      this.setData({
        select: true,
        selected: false
      })
    }
  },
  
  infomation:function(e){
    var i = e.detail.value.attr
    this.setData({
      host: config.service.host,
      foodInfo:this.data.datas[i]
    })
    var THIS = this
    setTimeout(function () { 
      THIS.setData({
        showModalStatus:"show"
      })
    },1000)
  },

  close:function(){
    this.setData({
      showModalStatus:"hide"
    })
  },
  // 添加菜品分类
  adds:function(){
    app.baseUrl('/pages/Admin/Variety/cate/cate');
  },
  // 添加菜品列表
  cates:function(){
    
    app.baseUrl("/pages/Admin/Variety/addlist/addlist");
  },
  // 删除菜品分类
  removes:function(e){
    var delfoodclass = this.data.foodclass;
    var This = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success:function(res){
        if(res.confirm){
          delete delfoodclass[e.currentTarget.dataset.remid];
          wx.setStorageSync('foodclass', delfoodclass);
          app.point("删除成功", "success", 2000);
          This.onLoad();
        }
      }
    })
    
  },

// 修改菜品分类
  formSubmit:function(e){
    wx.setStorageSync('key', e.detail.value);
    wx.setStorageSync('id', e.currentTarget.dataset.id);
    console.log(e);
    app.baseUrl('/pages/Admin/Variety/edit/edit');
  }
})