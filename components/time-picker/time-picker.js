const app = getApp()
Component({
  properties: {
    positionBottom: Boolean, // 是否将日期显示在底部
    showIcon: Boolean,
    value: String
  },
  data: {
    date: ''
  },
  lifetimes: {
    ready () {
      // console.log(this.properties)
      const date = this.properties.value || app.formateDate().today
      this.setData({date})
      // console.log(this.data)
    }
  },
  methods: {
    /**
     * 日期选择器onchange事件
     */
    bindDateChange (e) {
      // console.log(e)
      this.setData({
        date: e.detail.value
      })
      this.triggerEvent('changeDate', this.data.date)
    }
  }
})