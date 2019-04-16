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
    if (!this.data.userName) {
      $Toast({
        content: '请输入用户名',
        type: 'error'
      })
      return
    }
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
        if (this.data.userName === 'quyu') {
          wx.setStorageSync('userWeight', 1)
        } else if (this.data.userName === 'quanguo') {
          wx.setStorageSync('userWeight', 2)
        } else if (this.data.userName === 'mendian') {
          wx.setStorageSync('userWeight', 3)
        } else {
          $Toast({
            content: '无效账户',
            type: 'error'
          })
          return
        }
        wx.switchTab({
          url: '/pages/todayAchievement/todayAchievement'
        })
      }
    }, 1000)
  }
})