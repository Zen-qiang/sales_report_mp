const app = getApp()
Page({
  data: {
    userCode: ''
  },
  onLoad () {
    this.setData({
      userCode: app.globalData.loginInfo.code,
    })
    // console.log(app.globalData.loginInfo)
  },
})