//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../common/iview/base/index')
Page({
  data: {
    dataArr: [
      {
        name: '总单数',
        type: ['数字', '文本', '金额'],
        index: 0,
        number: 1,
        checked: true
      },
      {
        name: '总数量',
        type: ['数字', '文本', '金额'],
        index: 0,
        number: 2,
        checked: true
      },
      {
        name: '总金额',
        type: ['数字', '文本', '金额'],
        index: 2,
        number: 3,
        checked: true
      }
    ]
  },
  onLoad () {
    if (wx.getStorageSync('modelArr')) {
      this.data.dataArr = wx.getStorageSync('modelArr')
      this.setData({
        dataArr: this.data.dataArr
      })
    }
  },
  changeName (e) {
    // console.log(e)
    const key = 'dataArr[' + e.currentTarget.dataset.index + '].name'
    this.setData({
      [key]: e.detail.value
    })
  },
  pickerChange (e) {
    // console.log(e)
    const key = 'dataArr[' + e.currentTarget.dataset.index + '].index'
    this.setData({
      [key]: e.detail.value
    })
  },
  changeNumber(e) {
    // console.log(e)
    const key = 'dataArr[' + e.currentTarget.dataset.index + '].number'
    this.setData({
      [key]: Number(e.detail.value)
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
    if (this.data.dataArr.length <= 3) {
      $Toast({
        content: '不能删除默认模板',
        type: 'warning'
      })
      return
    }
    this.data.dataArr.pop()
    this.setData({
      dataArr: this.data.dataArr
    })
  },
  addData () {
    const number = this.data.dataArr.length + 1
    const obj = {
      name: '备注：',
      type: ['数字', '文本', '金额'],
      index: 0,
      number: number,
      checked: false
    }
    this.data.dataArr.push(obj)
    this.setData({
      dataArr: this.data.dataArr
    })
  },
  saveData () {
    wx.setStorageSync('modelArr', this.data.dataArr)
    $Toast({
      content: '保存成功',
      type: 'success'
    })
  }
})
