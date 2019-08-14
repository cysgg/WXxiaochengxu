// pages/add/add.js
const db = wx.cloud.database(); // 数据库连上了
const productsCollection = db.collection('products') // 表 集合


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData(){
    const product = {
      title : `Product ${(Math.random() * 100).toFixed(2)}`,
      image: "https://www.baidu.com/img/bd_logo1.png",
      tags:["tag123","tag23","tag3"],
      price : (Math.random()*100).toFixed(2),
      color : "blue",
      view: parseInt(Math.random() * 10)
    }
    productsCollection.add({
      data:product
      }).then(res=>{
        console.log(res)
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