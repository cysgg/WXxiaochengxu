// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      name: '',
      phone: '',
      detail: ''
    }
  },
  bindValue(e) {
    let address = this.data.address
    address[e.currentTarget.dataset.type] = e.detail.value
    this.setData({
      address: address
    })
    console.log(this.data.address);

  },
  forSubmit() {
    if (this.data.address.name && this.data.address.phone && this.data.address.detail) {
      wx.setStorage({
        key: 'address',
        data: this.data.address,
        success: (result)=>{
          wx.navigateBack({
            delta: 1
          });
        },
        fail: ()=>{

        },
        complete: ()=>{

        }
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F'
      });
    }
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