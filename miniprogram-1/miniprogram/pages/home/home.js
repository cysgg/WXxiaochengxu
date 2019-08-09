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
    showpopboxbg: false,
    showpopinner: false,
    showpopcontainer: false,
    showpopupbox: false,
    hasshowpopupbox: false,
    homebgimg: '/images/home_bgi.jpg',
    startTime: "2017-11-12",
    togetherDays: 0
  },
  showchooseimgbox() {
    this.setData({
      showpopcontainer: false,
      showpopupbox: true,
      hasshowpopupbox: true
    })
    setTimeout(() => {
      this.setData({
        showpopinner: false
      })
    }, 200)
  },
  toPersonHtml(e) {
    let personid = e.currentTarget.dataset.personid
    wx.navigateTo({
      url: '/pages/personHtml/personHtml?personid=' + personid,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
      }
    })
  },
  toEditAnnHtml(v) {
    this.hidPopBox()
    wx.navigateTo({
      url: '/pages/editAnn/editAnn?time=' + this.data.startTime,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log('111');

      }
    })
  },
  toReductionHtml(v) {
    wx.navigateTo({
      url: '/pages/reduction/reduction?imgurl=' + v,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log('111');

      }
    })
  },
  hidPopBox() {
    this.setData({
      showpopcontainer: false,
      showpopupbox: false,
      showpopboxbg: false
    })
    setTimeout(() => {
      this.setData({
        showpopinner: false,
        popboxactive: false,
        hasshowpopupbox: false
      })
    }, 600)
  },
  showPopBox() {
    this.setData({
      showpopinner: true,
      showpopcontainer: true,
      showpopboxbg: true,
      popboxactive: true
    })
  },
  getcamerapotot() {
    let _this = this
    this.takephoto('camera').then(res => {
      _this.hidPopBox()
      _this.toReductionHtml(res.tempFilePaths[0])
    }).catch(err=>{
      console.log(err);
    })
  },
  getalbumpotot() {
    let _this = this
    this.takephoto('album').then(res => {
      _this.hidPopBox()
      _this.toReductionHtml(res.tempFilePaths[0])
    })
  },
  setdefaultbgimg() {
    this.setData({
      homebgimg: '/images/home_bgi.jpg'
    })
    this.hidPopBox()
  },
  takephoto(sourceType) {
    return new Promise((resolve, reject) => {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: [sourceType], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          return resolve(res)
          // var tempFilePath = res.tempFilePaths[0];
        },
        fail: function (err) {
          return reject(err)
        }
      })
    })

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
    let days = this.checkDate(this.data.startTime,new Date())
      this.setData({
        togetherDays: days
      })

  },
  checkDate: function (startTime, endTime) {
    //转成毫秒数，两个日期相减
    var days = Date.parse(endTime) - Date.parse(startTime);
    //转换成天数
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    this.hidPopBox()
    return {
      title: '小恩爱',
      path: '/page/home/home'
    }
  }
})