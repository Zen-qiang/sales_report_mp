const app = getApp()
const { $Toast } = require('../../common/iview/base/index')
const data = {
  quyu: {
    achievementData: {
      countShop: '6/25',
      sumData: {
        sumAmt: {
          price: 89980,
          percent: -80.5
        },
        sumNum: {
          count: 145,
          percent: -75.5
        },
        singleAmt: {
          price: 620.55,
          percent: 1.8
        },
        singleNum: {
          count: 1.8,
          percent: 1.2
        }
      }
    },
    shopRank: {
      title: '区域门店排行',
      list: [
        {
          name: '上海正大广场店',
          price: 20168
        },
        {
          name: '上海港汇',
          price: 18868
        },
        {
          name: '上海梅陇镇',
          price: 16668
        }
      ]
    },
    shopTop: {
      title: '全国门店TOP10',
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
    }
  },
  quanguo: {
    achievementData: {
      countShop: '6/1280',
      sumData: {
        sumAmt: {
          price: 89980,
          percent: -80.5
        },
        sumNum: {
          count: 145,
          percent: -75.5
        },
        singleAmt: {
          price: 620.55,
          percent: 1.8
        },
        singleNum: {
          count: 1.8,
          percent: 1.2
        }
      }
    },
    shopRank: {
      title: '区域排行',
      list: [
        {
          name: '华东',
          price: 20168
        },
        {
          name: '华南',
          price: 18868
        },
        {
          name: '华北',
          price: 16668
        }
      ]
    },
    shopTop: {
      title: '全国门店TOP50',
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
    }
  }
}
Page({
  data: {
    userWeight: null,
    today: '',
    thead: '',
    achievementData: {},
    shopRank: {},
    shopTop: {}
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
    const {achievementData, shopRank, shopTop} = data[key]
    this.setData({
      userWeight: wx.getStorageSync('userWeight'),
      today: app.formateDate().today,
      achievementData: achievementData,
      shopRank: shopRank,
      shopTop: shopTop,
      thead: thead
    })
  },
  formsubmit (e) {
    console.log('formsubmit', e)
    $Toast({
      content: '保存成功',
      type: 'success'
    })
  }
})