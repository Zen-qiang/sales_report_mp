//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    array: ['数字', '文本'],
    index1: 0,
    array1: ['1', '2']
  },
  bindPickerChange (e) {
    console.log(e.detail)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1 (e) {
    console.log(e.detail)
    this.setData({
      index1: e.detail.value
    })
  }
})
