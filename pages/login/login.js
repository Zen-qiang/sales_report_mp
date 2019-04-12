const { $Toast } = require('../../common/iview/base/index')
const app = getApp()
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
        wx.setStorageSync('userWeight', 0)
        wx.navigateTo({
          url: '/pages/admin/admin'
        })
      } else {
        if (this.data.userName === 'user1') {
          wx.setStorageSync('userWeight', 1)
        } else if (this.data.userName === 'user2') {
          wx.setStorageSync('userWeight', 2)
        }
        wx.switchTab({
          url: '/pages/todayAchievement/todayAchievement'
        })
      }
    }, 1000)
  }
})