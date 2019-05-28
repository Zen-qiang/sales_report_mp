import { login as $login } from '../../utils/action'
const app = getApp()
import Toast from '../../common/vantUI/toast/toast'
Page({
  data: {
    userName: '',
    password: '',
    loading: false
  },
  onLoad () {
    wx.clearStorageSync()
  },
  inputUserName (e) {
    // console.log(e)
    this.setData({
      userName: e.detail
    })
  },
  inputPasswrod (e) {
    // console.log(e)
    this.setData({
      password: e.detail
    })
  },
  login () {
    if (this.loading) return
    if (!this.data.userName || !this.data.password) {
      Toast.fail({
        message: '请输入用户名密码',
        position: 'top'
      })
      return
    }
    this.setData({
      loading: true
    })
    $login({
      username: this.data.userName,
      password: this.data.password
    }).then(({ data }) => {
      this.setData({
        loading: false
      })
      switch (data.code) {
        case 'NW': // 全国汇总
        case 'ZY': // 全国直营
        case 'RA': // 区域汇总
        case 'JM': // 全国加盟
        case 'QYZY': // 区域直营
        case 'QYJM': // 区域加盟
        case 'SUBAREA': // 二级区域
        case 'SS': // 门店
          app.globalData.loginInfo = data
          wx.setStorageSync('sessionKey', data.sessionToken)
          wx.switchTab({
            url: '/pages/todayAchievement/todayAchievement'
          })
          break;
        default:
          Toast.fail({
            message: '无效用户',
            position: 'top'
          })
      }
    }).catch(err => {
      // console.log(err)
      Toast.fail({
        message: err && err.msg || '登陆失败',
        position: 'top'
      })
      this.setData({
        loading: false
      })
    })
  }
})