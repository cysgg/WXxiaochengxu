// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category: [
            { name: '果味', id: 'guowei' },
            { name: '蔬菜', id: 'shucai' },
            { name: '炒货', id: 'chaohuo' },
            { name: '点心', id: 'dianxin' },
            { name: '粗茶', id: 'cucha' },
            { name: '淡饭', id: 'danfan' }
          ],
          curIndex:0,
          toView:'guowei',
          isScroll:false
    },
    switchTap(e){
        this.setData({
            curIndex : e.currentTarget.dataset.index,
            toView : e.currentTarget.dataset.id
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
        let self = this
        this.getrequest('http://www.gdfengshuo.com/api/wx/cate-detail.txt')
        .then(res=>{
            self.setData({
                detail : res.data
            })
        })
    },

    getrequest(url){
        return new Promise((resolve,resject)=>{
            wx.request({
                url: url,
                success(res){
                    return resolve(res);
                }
    
            })
        })
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