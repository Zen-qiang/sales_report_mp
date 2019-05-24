Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    arrow: Boolean, // 右侧是否显示箭头
    gray: Boolean, // 表格主题颜色
    areaList: Array, // 区域排行
    shopList: Array, // 门店排行
    canClick: Boolean, // 是否可以点击
    area: String, // 区域名称
    date: String, // 日期
    code: String, // userCode
    areaId: { // 区域id
      type: Number,
      optionalTypes: [String]
    }
  },
  methods: {
    // 跳转到二级业绩页面
    jumpSecondAchievement (e) {
      // console.log(e)
      const {id, code, name} = e.currentTarget.dataset.obj,
        date = this.properties.date
      wx.navigateTo({
        url: `/pages/secondAchievement/secondAchievement?id=${id}&code=${code}&date=${date}&area=${name}`
      })
    },
    // 跳转到门店排行榜页面
    jumpShopRank () {
      const id = this.properties.areaId,
        date = this.properties.date,
        code = this.properties.code,
        area = this.properties.area
      wx.navigateTo({
        url: `/pages/shopRank/shopRank?id=${id}&code=${code}&date=${date}&area=${area}`
      })
    },
    // 跳转到门店信息页面
    jumpShopInfo (e) {
      if (!this.properties.canClick) return
      // console.log(e)
      const {id, name} = e.currentTarget.dataset.obj,
        date = this.properties.date
      wx.navigateTo({
        url: `/pages/shopInfo/shopInfo?id=${id}&name=${name}&date=${date}`
      })
    }
  }
})