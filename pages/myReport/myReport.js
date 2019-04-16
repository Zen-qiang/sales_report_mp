const data = {
  quyu: [
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
  ],
  quanguo: [
    {
      name: '华东',
      price: 20168
    },
    {
      name: '华南',
      price: 17000
    },
    {
      name: '华北',
      price: 10000
    }
  ]
}
Page({
  data: {
    userWeight: null,
    current: 0,
    summary: [
      {
        sumAmt: {
          price: 515288,
          percent: -60.5
        },
        sumNum: {
          count: 125,
          percent: -59
        },
        singleAmt: {
          price: 603.39,
          percent: -1.5
        },
        singleNmu: {
          count: 1.8,
          percent: -1.5
        }
      },
      {
        sumAmt: {
          price: 2333,
          percent: -20.5
        },
        sumNum: {
          count: 200,
          percent: 69
        },
        singleAmt: {
          price: 100.39,
          percent: 2.5
        },
        singleNmu: {
          count: 1.2,
          percent: -2
        }
      }
    ],
    list: [],
    thead: ''
  },
  onLoad () {
    let key, thead
    switch (wx.getStorageSync('userWeight')) {
      case 1:
        key = 'quyu'
        thead = '门店'
        break
      case 2:
        key = 'quanguo'
        thead = '区域'
        break
      default:
        key = 'quyu'
        thead = '门店'
    }
    const list = data[key]
    this.setData({
      userWeight: wx.getStorageSync('userWeight'),
      list: list,
      thead: thead
    })
  },
  handleChange({ detail }) {
    this.setData({
      current: Number(detail.key)
    });
  },
  jumpToLogin () {
    wx.reLaunch({
      url: '/pages/login/login'
    })
  }
})