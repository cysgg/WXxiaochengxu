// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      name: "聊天记录",
      num: 1336,
      type: "条"
    }, {
      name: "发送距离",
      num: 8,
      type: "次"
    }, {
      name: "写日记",
      num: 8,
      type: "篇"
    }, {
      name: "纪念日",
      num: 5,
      type: "个"
    }, {
      name: "上传照片",
      num: 102,
      type: "张"
    }],
    popboxactive: false,
    fadeClass: "fadeIn"
  },
  hidPopBox() {
    this.setData({
      fadeClass: "fadeOut"
    })
    setTimeout(()=>{
      this.setData({
        popboxactive: false
      })
    },600)
  },
  showPopBox() {
    this.setData({
      fadeClass: "fadeIn"
    })
    setTimeout(()=>{
      this.setData({
        popboxactive: true
      })
    },200)
    
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

  }
})