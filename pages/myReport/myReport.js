const app = getApp()
import action from '../../utils/action'
import Toast from '../../common/vantUI/toast/toast'
Page({
  data: {
    tabIndex: 0,
    areaData: {},
    storeData: {},
    areaList: [],
    startDate: '',
    endDate: '',
    isSummary: false // 是否是汇总人员
  },
  onLoad () {
    const codes = ['NW', 'ZY', 'RA', 'JM']
    this.setData({
      userCode: app.globalData.loginInfo.code,
      isSummary: codes.includes(app.globalData.loginInfo.code)
    })
    // 汇总账号可查看大区排行
    if (this.data.isSummary) {
      this.areaAchievementByWeek()
      this.getAreaRank()
    } else {
      this.storeAchievementByWeek()
    }
  },
  // 切换tab
  changeTabIndex (e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
    switch (this.data.tabIndex) {
      case 0: // 本周
        if (this.data.isSummary) {
          this.areaAchievementByWeek()
          this.getAreaRank()
        } else {
          this.storeAchievementByWeek()
        }
        break
      case 1: // 本月
        if (this.data.isSummary) {
          this.areaAchievementByMonth()
          this.getAreaRank()
        } else {
          this.storeAchievementByMonth()
        }
        break
    }
  },
  // 选择开始时间
  changeDateStart (e) {
    // console.log(e)
    this.setData({
      startDate: e.detail.value
    })
  },
  // 选择结束时间
  changeDateEnd (e) {
    // console.log(e)
    this.setData({
      endDate: e.detail.value
    })
  },
  // 按时间段查看业绩
  getAchievementByRangeTime () {
    if (!this.data.startDate || !this.data.endDate) {
      Toast.fail({
        message: '请选择时间范围',
        position: 'top'
      })
      return
    }
    if (this.data.isSummary) {
      this.areaAchievementByRangeTime()
      this.getAreaRank()
    } else {
      this.storeAchievementByRangeTime()
    }
  },
  // 获取管理人员本周业绩
  areaAchievementByWeek () {
    action.areaAchievementByWeek().then(({data}) => {
      // console.log(data)
      this.setData({
        areaData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  // 获取管理人员本月业绩
  areaAchievementByMonth () {
    action.areaAchievementByMonth().then(({ data }) => {
      // console.log(data)
      this.setData({
        areaData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  // 获取管理人员某个时间段业绩
  areaAchievementByRangeTime () {
    action.areaAchievementByRangeTime({
      startTime: this.data.startDate,
      endTime: this.data.endDate
    }).then(({data}) => {
      // console.log(data)
      this.setData({
        areaData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  // 获取本周业绩 门店
  storeAchievementByWeek () {
    action.storeAchievementByWeek().then(({ data }) => {
      // console.log(data)
      this.setData({
        storeData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  // 获取本月业绩 门店
  storeAchievementByMonth() {
    action.storeAchievementByMonth().then(({ data }) => {
      // console.log(data)
      this.setData({
        storeData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  // 获取某个时间段的业绩 门店
  storeAchievementByRangeTime () {
    action.storeAchievementByRangeTime({
      startTime: this.data.startDate,
      endTime: this.data.endDate
    }).then(({ data }) => {
      // console.log(data)
      this.setData({
        storeData: data
      })
    }).catch(err => {
      console.error(err)
    })
  },
  /**
   * 获取大区排行
   */
  getAreaRank () {
    action.getAreaRank({
      startTime: this.data.startDate,
      endTime: this.data.endDate,
      weekOrMonth: this.data.tabIndex + 1
    }).then(({data}) => {
      // console.log(data)
      if (data) {
        // const list = data.map(item => JSON.parse(item))
        this.setData({
          areaList: data
        })
      }
    }).catch(err => {
      console.error(err)
    })
  },
  /**
   * 退出登陆
   */
  logOut () {
    action.logout().then(({data}) => {
      console.log(data.msg)
    }).catch(err => {
      console.error(err)
    })
    wx.reLaunch({
      url: '/pages/login/login'
    })
  }
})