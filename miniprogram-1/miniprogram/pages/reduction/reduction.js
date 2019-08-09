let cropper = null;
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight

Page({


  data: {

  },


  //////////////  init /////////////////////////
  onLoad: function (options) {
    console.log(options);

    cropper = this.selectComponent('#cropper');
    cropper.fnInit({
      imagePath: options.imgurl, //*必填
      debug: true, //可选。是否启用调试，默认值为false。true：打印过程日志；false：关闭过程日志
      outputFileType: 'jpg', //可选。目标文件的类型。默认值为jpg，jpg：输出jpg格式图片；png：输出png格式图片
      quality: 1, //可选。图片的质量。默认值为1，即最高质量。目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
      aspectRatio: W/H, //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。aspectRatio需大于0
      minBoxWidthRatio: 0.2, //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2, //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6, //可选。剪裁框初始大小比率。默认值0.6，即剪裁框默认宽度为图片宽度的0.6倍。
      initialBoxHeightRatio: 0.6 //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
    });


  },

  ////////  cancel ///////////////////
  fnCancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  ////////// do crop ////////////////////
  fnSubmit: function () {
    var pages = getCurrentPages(); // 获取页面栈  
    var prevPage = pages[pages.length - 2]; // 上一个页面
    //do crop
    cropper.fnCrop({

      //剪裁成功的回调
      success: function (res) {
        //生成文件的临时路径
        prevPage.setData({
          homebgimg: res.tempFilePath
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        })
        // wx.previewImage({ //在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
        //   urls: [res.tempFilePath],
        // })
      },
      //剪裁失败的回调
      fail: function (res) {
        wx.showToast({
          title: '失败',
          icon: 'none',
          duration: 1000
        })
        
      },

      //剪裁结束的回调
      complete: function () {
        //complete
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1
          })
        },1000)
      }
    });
  }
})