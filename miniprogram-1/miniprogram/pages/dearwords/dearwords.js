// pages/dearwords/dearwords.js
const ctx = wx.createCanvasContext('myCanvas');
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight
console.log(W, H);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    scale: 1,
    imgInfo: {
      src: '',
      width: 0,
      height: 0,
      roate : 1
    },
    cutImgInfo: {
      src: '',
      width: 0,
      height: 0
    }
  },
  onChange: function (e) {
    console.log(e.detail)
    this.setData({
      x: e.detail.x,
      y: e.detail.y
    });
  },
  onScale: function (e) {
    console.log(e.detail)
    this.setData({
      x: e.detail.x,
      y: e.detail.y,
      width: _this.width * e.detail.scale,
      height: _this.height * e.detail.scale
    });
  },
  getsnip() {
    var _this = this;
    let x = _this.data.x,
      y = _this.data.y,
      w = _this.data.width,
      h = _this.data.height,
      dw = w,
      dh = h;
    
    ctx.drawImage(_this.data.imgInfo.src, 0, 0, W, W*_this.data.imgInfo.roate);
    ctx.draw(true, setTimeout(function () {
      wx.canvasToTempFilePath({
        x: x,
        y: y,
        width: w,
        height: h,
        destWidth: dw,
        destHeight: dh,
        canvasId: 'myCanvas',
        success(res) {
          console.log(res.tempFilePath)
          _this.setData({
            cutImgInfo: {
              src: res.tempFilePath,
              width: dw,
              hieght: dh
            }
          });
        }
      })
    }, 1000));

  },
  selectimg() {
    var _this = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePath = res.tempFilePaths[0];
        //这里是上传操作
        if (tempFilePath) {
          console.log(tempFilePath)
          wx.getImageInfo({
            src: tempFilePath,
            success: function (res) {
              let w = parseInt(res.width),
                h = parseInt(res.height);

              _this.setData({
                imgInfo: {
                  src: tempFilePath,
                  width: w,
                  height: h,
                  roate : (h/w).toFixed(2)
                }
              })
              ctx.drawImage(_this.data.imgInfo.src, 0, 0, W, W*_this.data.imgInfo.roate);
              ctx.draw()
            }
          })
        }

      }
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