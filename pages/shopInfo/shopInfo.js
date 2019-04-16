const app = getApp()
Page({
  data: {
    today: ''
  },
  onLoad () {
    this.setData({
      today: app.formateDate().today
    })
  }
})