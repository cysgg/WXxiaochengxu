// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    status : false,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    },
    length : 6,
    time: (new Date()).toString(),
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4]
  },

  tap: function(e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function(e) {
    console.log(e.detail)
  },
  onScale: function(e) {
    console.log(e.detail)
  },

  click() {
    this.setData({
      status : true
    })
    wx.showModal({

      title: '标题',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function (res) {

        if (res.confirm) {

          console.log('用户点击主操作')

        } else if (res.cancel) {

          console.log('用户点击次要操作')

        }

      }

    })

    setTimeout(()=>{
      wx.showToast({ // 显示Toast

        title: '1s later',

        icon: 'success',

        duration: 1000

      })
      this.setData({
        status: false
      })
    },1000)
  }
  ,
  switch(event){
    const len = this.data.objectArray.length;
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    let temp = this.data.objectArray[x];
    this.data.objectArray[x] = this.data.objectArray[y];
    this.data.objectArray[y] = temp;
    console.log(event)
    this.setData({
      objectArray : this.data.objectArray
    })
  },
  addToFront(){
    const len = this.data.objectArray.length;
    this.data.objectArray.unshift({ id: len, unique: 'unique_' + len})
    this.setData({
      objectArray: this.data.objectArray
    })

  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
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
    console.log('xialale')
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