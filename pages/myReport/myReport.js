Page({
  data: {
    current: 0
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  jumpToLogin () {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  }
})