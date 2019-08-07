// pages/personHtml/personHtml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personId : 1,
    personInfo: {
      id: 1
    },
    imgurl : '/images/couple2.jpg'
  },

  setnavtitle: function(str){
    wx.setNavigationBarTitle({
      title: str 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    let personid = option.personid;
    console.log(personid);
    this.data.personId == 1 ? this.setnavtitle("另一半") : this.setnavtitle("个人账户")
    this.setData({
      personId: personid
    })
  },

  toImgShow(){
    let _this = this
    wx.navigateTo({
      url: '/pages/imgShow/imgShow?imgurl=' + _this.data.imgurl,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
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

  }
})