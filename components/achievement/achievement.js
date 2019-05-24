import action from '../../utils/action'
const app = getApp()
Component({
  properties: {
    parentDate: String, // 父组件传值 时间
    parentCode: String, // 父级传值 用户code
    parentAreaid: {
      type: Number,
      optinalTypes: [String]
    }, // 父级传值 areaId
    parentName: String, // 父级传值 用户名
    showReport: Boolean, // 是否显示业绩信息
    showArea: Boolean // 是否显示区域排行榜
  },
  data: {
    date: '',
    areaId: null, // 当前登陆用户areaId
    code: '', // 当前登陆用户code
    area: '', // 当前区域
    currentStores: 0, // 当前门店数量
    allStores: 0, // 总计门店数量
    reportData: {}, // 业绩
    areaList: [],
    shopList: []
  },
  lifetimes: {
    attached () {
      const date = this.properties.parentDate || app.formateDate().today,
        areaId = this.properties.parentAreaid || app.globalData.loginInfo.areaId,
        code = this.properties.parentCode || app.globalData.loginInfo.code,
        area = this.properties.parentName || app.globalData.loginInfo.name
      this.setData({date, areaId, code, area})
      if (this.properties.showReport) {
        this.getAchievementByDate()
      }
      if (this.properties.showArea) {
        this.getRank()
      }
      this.getStoreRnk()
      // console.log('ready', this.properties, this.data)
    }
  },
  methods: {
    /**
    * 获取时间选择器中的日期
    * TODO 监听子组件 time-picker change事件 更新页面数据
    * @param 当前选中的时间
    */
    getChangeDate({ detail }) {
      // this.data.date = detail
      this.setData({
        date: detail
      })
      if (this.properties.showReport) {
        this.getAchievementByDate()
      }
      if (this.properties.showArea) {
        this.getRank()
      }
      this.getStoreRnk()
    },
    /**
     * 获取管理人员当天或某天业绩
     */
    getAchievementByDate () {
      action.areaAchievementByDate({
        code: this.data.code,
        areaId: this.data.areaId,
        date: this.data.date
      }).then(({data}) => {
        if (data) {
          const { storeResult: reportData, currentStores, allStores } = data
          this.setData({ reportData, currentStores, allStores })
        }
      }).catch(err => {
        console.error(err)
      })
    },
    /**
     * 获取区域排行
     */
    getRank () {
      action.getRank({
        code: this.data.code,
        areaId: this.data.areaId,
        date: this.data.date,
        start: 1,
        stop: -1,
      }).then(({data}) => {
        // console.log(data)
        if (data) {
          // const arr = data.map(item => JSON.parse(item))
          this.setData({
            areaList: data
          })
        }
      }).catch(err => {
        console.error(err)
      })
    },
    /**
     * 获取门店排行
     */
    getStoreRnk () {
      // const { code, areaId: id } = app.globalData.loginInfo
      action.getStoreRank({
        code: this.data.code,
        areaId: this.data.areaId,
        date: this.data.date,
        start: 1,
        stop: 10
      }).then(({ data }) => {
        // console.log(data)
        if (data) {
          // const arr = data.map(item => JSON.parse(item))
          this.setData({
            shopList: data
          })
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
})