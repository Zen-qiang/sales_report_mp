const { $Toast } = require('../../common/iview/base/index')
Page({
  data: {
    userName: '',
    password: '',
    loading: false
  },
  inputUserName (e) {
    // console.log(e.detail.detail.value)
    this.setData({
      userName: e.detail.detail.value
    })
  },
  inputPasswrod (e) {
    // console.log(e)
    this.setData({
      password: e.detail.detail.value
    })
  },
  login () {
    if (this.loading) return
    this.setData({
      loading: true
    })
    setTimeout(() => {
      // $Toast({
      //   content: '错误的提示',
      //   type: 'error'
      // })
      this.setData({
        loading: false
      })
      if (this.data.userName === 'admin') {
        wx.navigateTo({
          url: '/pages/admin/admin'
        })
      } else {
        wx.switchTab({
          url: '/pages/todayAchievement/todayAchievement'
        })
      }
    }, 2000)
  }
})