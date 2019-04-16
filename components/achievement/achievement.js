Component({
  properties: {
    date: String,
    countShop: String,
    sumData: Object,
    shopRank: Object,
    shopTop: Object,
    thead: String
  },
  methods: {
    jumpRank () {
      wx.navigateTo({
        url: '/pages/rank/rank'
      })
    },
    jumpRankItem () {
      if (this.data.thead === '门店') return
      wx.navigateTo({
        url: '/pages/rank/rank'
      })
    }
  }
})