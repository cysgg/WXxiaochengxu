前端 后端 全栈
数据库？ 云开发提供了可视化的数据库和API
让前端具有完整项目的开发能力
-组件化的概念
 页面由组件构成，组件可以来自第三方（vant) 合作，
 page.json中 声明一下
 {
   "usingComponents":{
     "vant-button":"/miniprogram_npm/vant-weapp/button/index"
   }
 }
页面要是用小程序组件 一定要先声明
template + data = Application

# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

