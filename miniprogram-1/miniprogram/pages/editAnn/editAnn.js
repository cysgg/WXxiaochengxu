// pages/editAnn/editAnn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime : '2017-08-09',
    nowTime : new Date().toString()
  },
  bindDateChange: function(e) {
    var pages = getCurrentPages(); // 获取页面栈  
    var prevPage = pages[pages.length - 2]; // 上一个页面
    this.setData({
      startTime: e.detail.value
    })
    
    prevPage.setData({
      startTime : this.data.startTime
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      startTime : options.time
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

  }
})