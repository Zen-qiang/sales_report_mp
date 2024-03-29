//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  formateDate: function () {
    let today
    today = new Date()
    // yesterday = new Date(new Date - 1000 * 60 * 60 * 24)
    const format = date => {
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      // let weekArr = ['日', '一', '二', '三', '四', '五', '六']
      // let week = '星期' + weekArr[date.getDay()]
      // return y + '-' + m + '-' + d + '  ' + week
      return y + '-' + m + '-' + d
    }
    return {
      today: format(today)
      // yesterday: format(yesterday)
    }
  },
  globalData: {
    userInfo: null,
    loginInfo: null
  }
})