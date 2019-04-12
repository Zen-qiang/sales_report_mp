const app = getApp()
Page({
  data: {
    userWeight: null
  },
  onLoad () {
    this.setData({
      userWeight: wx.getStorageSync('userWeight')
    })
  },
  formsubmit (e) {
    console.log('formsubmit', e)
  }
})