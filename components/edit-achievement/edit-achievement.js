import action from '../../utils/action'
const app = getApp()
Component({
  data: {
    area: '',
    date: '',
    dataList: [],
    focusIndex: null
  },
  lifetimes: {
    ready() {
      this.data.date = app.formateDate().today
      this.setData({
        area: app.globalData.loginInfo.name
      })
      this.getTemplate()
    }
  },
  methods: {
    getChangeDate ({detail}) {
      // console.log(detail)
      this.setData({
        date: detail
      })
    },
    inputFocus (e) {
      wx.nextTick(() => {
        this.setData({
          focusIndex: e.currentTarget.dataset.index
        })
      })
    },
    inputBlur (e) {
      this.setData({
        focusIndex: null
      })
    },
    // 获取模板
    getTemplate () {
      action.getTemplate().then(({data}) => {
        // console.log(data)
        this.setData({
          dataList: data
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 提交模板
    templateSubmit (e) {
      const { storeId } = app.globalData.loginInfo
      let data = [],
        validInputVal = {}, // 表单中有效值
        hasValidInpntVal = false // 是否有填写表单
      for (const key in e.detail.value) {
        if (e.detail.value.hasOwnProperty(key)) {
          const element = e.detail.value[key];
          if (element) {
            validInputVal[key] = element // 储存表单中有效填写过的值
            hasValidInpntVal = true
          }
        }
      }
      if (!hasValidInpntVal) {
        wx.showToast({
          title: '请填写数据',
          icon: 'none',
          duration: 1000
        })
        return
      }
      for (const key in validInputVal) {
        if (validInputVal.hasOwnProperty(key)) {
          const element = validInputVal[key]
          const dataItem = this.data.dataList.find(item => key === item.fieldEngName)
          if (dataItem) {
            data.push({
              date: this.data.date,
              fkUserId: storeId,
              fkTemplateId: dataItem.id,
              data: element
            })
          }
        }
      }
      wx.showLoading({
        title: '保存中...'
      })
      action.fillData({
        data: data
      }).then(({data}) => {
        // console.log(data.msg)
        wx.hideLoading({
          complete: () => {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 1500
            })
          }
        })
      }).catch(err => {
        console.error(err)
        wx.hideLoading()
      })
    }
  }
})