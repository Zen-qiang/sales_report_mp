Page({
  data: {
    userWeight: null
  },
  onLoad () {
    this.setData({
      userWeight: wx.getStorageSync('userWeight')
    })
  }
})