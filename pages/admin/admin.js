//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataArr: [
      {
        type: ['数字', '文本', '金额'],
        index: 0,
        checked: false
      },
      {
        type: ['数字', '文本', '金额'],
        index: 0,
        checked: false
      }
    ]
  },
  pickerChange (e) {
    // console.log(e)
    const key = 'dataArr[' + e.currentTarget.dataset.index + '].index'
    this.setData({
      [key]: e.detail.value
    })
  },
  switchChange (e) {
    // console.log(e)
    const key = 'dataArr[' + e.currentTarget.dataset.index + '].checked'
    this.setData({
      [key]: e.detail.value
    })
  },
  deleteData () {
    const obj = {
      type: ['数字', '文本', '金额'],
      index: 0,
      checked: false
    }
    this.data.dataArr.pop()
    this.setData({
      dataArr: this.data.dataArr
    })
  },
  addData () {
    const obj = {
      type: ['数字', '文本', '金额'],
      index: 0,
      checked: false
    }
    this.data.dataArr.push(obj)
    this.setData({
      dataArr: this.data.dataArr
    })
  }
})
