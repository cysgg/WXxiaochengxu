// pages/imgShow/imgShow.js

const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageurl: '',
    imgWidth: 0,
    imgHeight: 0,
    scaleW: 0,
    scaleH: 0,
    viewWidth: 0,
    viewHeight: 0,
    distance: 0,
    scale: 1,
    starttouch: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    this.getImgInfo(options.imgurl).then(res => {
      _this.setData({
        imageurl: options.imgurl,
        imgWidth: res.width,
        imgHeight: res.height
      })
      let roate = (this.data.imgWidth / this.data.imgHeight).toFixed(2)

      this.setData({
        scaleW: W,
        scaleH: W * roate,
        viewWidth: W,
        viewHeight: W * roate
      })
    })
  },

  touchevent(e) {
    if (e.touches.length != 2) {
      return
    }
    let _this = this

    let xMove = e.touches[1].clientX - e.touches[0].clientX;
    let yMove = e.touches[1].clientY - e.touches[0].clientY;

    let distance = Math.sqrt(xMove * xMove + yMove * yMove);

    if (!this.data.starttouch) {
      this.setData({
        distance: distance
      })
    }else{
      let distancedif = distance - _this.data.distance
      let newscale = _this.data.scale + 0.005 * distancedif
      newscale = newscale < 1 ? 1 : newscale > 2 ? 2 : newscale
      this.setData({
        distance: distance,
        scale: newscale,
        scaleH: (_this.data.viewHeight * newscale).toFixed(2),
        scaleW: (_this.data.viewWidth * newscale).toFixed(2)
      })
    }
    this.setData({
      starttouch: true
    })

  },
  touchendevent() {
    this.setData({
      starttouch: false
    })
  },

  getImgInfo(src) {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src: src,
        success: function (res) {
          return resolve(res)
        }
      })
    })
  },

  backtoold() {
    wx.navigateBack({
      delta: 1
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