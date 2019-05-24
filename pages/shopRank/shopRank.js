import action from '../../utils/action'
Page({
  data: {
    pageNum: 1,
    date: '',
    area: '',
    code: '',
    areaId: null,
    shopList: [],
    loading: false, // 正在加载
    loaded: false // 数据加载完成
  },
  onLoad (option) {
    // console.log(option)
    const {id: areaId, code, date, area} = option
    this.setData({areaId, code, date, area})
    this.getStoreRank()
  },
  onReachBottom () {
    console.log('onReachBottom')
    if (this.data.loading || this.data.loaded) return
    this.data.pageNum = this.data.pageNum + 1
    this.getStoreRank()
  },
  getChangeDate (e) {
    // console.log(e)
    this.data.loading = false
    this.data.loaded = false
    this.data.pageNum = 1
    this.setData({
      date: e.detail
    })
    this.getStoreRank()
  },
  // 获取门店排行
  getStoreRank () {
    this.data.loading = true
    action.getStoreRank({
      date: this.data.date,
      start: this.data.pageNum,
      stop: 10,
      code: this.data.code,
      areaId: this.data.areaId
    }).then(({ data }) => {
      // console.log(data)
      if (data) {
        // const arr = data.map(item => JSON.parse(item))
        if (this.data.pageNum === 1) {
          this.setData({
            shopList: data
          })
        } else {
          this.setData({
            shopList: this.data.shopList.push(...data)
          })
        }
      } else {
        this.data.loaded = true
      }
      this.data.loading = false
    }).catch(err => {
      this.data.loading = false
      console.error(err)
    })
  }
}) 