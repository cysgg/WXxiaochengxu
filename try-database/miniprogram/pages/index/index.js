//index.js
const app = getApp()
const db = wx.cloud.database();
const productsCollection = db.collection('products')

Page({
  data: {
    products: [],
    page: 0
  },

  onLoad: function() {
    productsCollection.limit(10).get().then(res => {
      console.log(res.data)
      this.setData({
        products: res.data
      })
    })

  },
  onPullDownRefresh(){
    productsCollection.limit(10).get().then(res => {
      this.setData({
        page : 0,
        products : res.data.concat(this.data.products)
      },res=>{
        wx.stopPullDownRefresh()
      })
    })
  },
  onReachBottom:function(){
    wx.showLoading({
      title: '正在加载 ',
    })
    let page = this.data.page + 10,
        old_data = this.data.products;
    productsCollection.skip(page).limit(10).get().then(res=>{
      this.setData({
        products: old_data.concat(res.data)
      })
    })
    this.setData({
      page : page
    })
    wx.hideLoading()
  }
})