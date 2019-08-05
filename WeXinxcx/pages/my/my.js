Page({
  data: {
    city : '南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    active_color : 'red',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    items : []
  },
  onLoad:function(option){
    let _self = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d2ed7ca7f168b5e40d35f47/movie/new/movielist',
      success:function(res){
        _self.setData({
          items: res.data.data.movieList
        })
        console.log(res.data.data.movieList)
      }
    })
  }
})