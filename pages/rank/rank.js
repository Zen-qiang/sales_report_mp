const app = getApp()
Page({
  data: {
    today: '',
    list: [
      {
        name: '上海梅陇镇',
        price: 20168
      },
      {
        name: '上海正大广场店',
        price: 17000
      },
      {
        name: '上海港汇',
        price: 10000
      },
      {
        name: '上海……',
        price: 666
      }
    ]
  },
  onLoad () {
    this.setData({
      today: app.formateDate().today
    })
  },
  jumpInfo () {
    wx.navigateTo({
      url: '/pages/shopInfo/shopInfo'
    })
  }
})