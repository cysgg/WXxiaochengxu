// pages/dearwords/dearwords.js
const ctx = wx.createCanvasContext('myCanvas');
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight
const PIX = device.pixelRatio

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowW: 0, // 窗口可用 宽
    windowH: 0, // 窗口可用 高
    x: 0, // moveview x
    y: 0, // moveview x
    width: 50, // moveview width
    height: 50, // moveview height
    scale: 1, // 当前放大比例
    cutSuccess: false, // 裁剪图片成功？
    imgInfo: { // 需要裁减的照片信息
      src: '',
      width: 0,
      height: 0,
      roate: 1
    },
    cutImgInfo: { // 裁减出来的照片信息
      src: '',
      width: 0,
      height: 0
    }
  },
  onChange: function (e) { // moveview 移动事件
    this.setData({
      x: e.detail.x,
      y: e.detail.y
    });
  },
  onScale: function (e) { // moveview 缩放事件
    this.setData({
      x: e.detail.x,
      y: e.detail.y,
      width: _this.width * e.detail.scale,
      height: _this.height * e.detail.scale
    });
  },
  getRect: function () {
    var _this = this;
    return new Promise((resolve, rejjct) => {
      wx.createSelectorQuery().select('.movev').boundingClientRect(function (rect) {
        if (!rect)
          return reject('err')
        return resolve(rect)
      }).exec()
    })
  },
  getsnip() { //裁剪图片
    var _this = this;
    this.getRect()
      .then(res => {
        let x = res.left,
          y = res.top,
          w = res.width,
          h = res.height,
          drawImgHeight = W * _this.data.imgInfo.roate,
          drawImgy = (H - drawImgHeight) / 2;

        ctx.drawImage(_this.data.imgInfo.src, 0, drawImgy, W, drawImgHeight);
        ctx.draw(true, setTimeout(function () {
          _this.getTempFile(x, y, w, h, w, h, 'myCanvas')
            .then(res => {
              return _this.getImgInfo(res)
            })
            .then(res => {
              _this.setData({
                cutImgInfo: {
                  src: res.path,
                  width: W,
                  height: W
                },
                cutSuccess: true
              });
            })
        }, 1000));

      })
  },

  getTempFile(x, y, w, h, dw, dh, canvasId) {
    return new Promise((resolve, reject) => {
      wx.canvasToTempFilePath({
        x: x,
        y: y,
        width: w,
        height: h,
        destWidth: dw,
        destHeight: dh,
        canvasId: canvasId,
        success(res) {
          if (!res.tempFilePath)
            return reject('err')
          return resolve(res.tempFilePath)
        }
      })
    })
  },

  getImg() {
    return new Promise((resolve, reject) => {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          return resolve(res)
        }
      })
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
  selectimg() {
    var _this = this
    _this.getImg()
      .then(res => {
        let imgurl = res.tempFilePaths[0]
        return _this.getImgInfo(imgurl)
      })
      .then(res => {
        let w = res.width,
          h = res.height;

        _this.setData({
          imgInfo: {
            src: res.path,
            width: parseInt(w),
            height: parseInt(h),
            roate: (h / w).toFixed(2)
          }
        })
        let drawImgHeight = W * _this.data.imgInfo.roate,
          drawImgy = (H - drawImgHeight) / 2;

        ctx.drawImage(_this.data.imgInfo.src, 0, drawImgy, W, drawImgHeight);
        ctx.draw()
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowW: W,
      windowH: H
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
  onShow: function () {},

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