import action from '../../utils/action'
Page({
  data: {
    area: '',
    date: '',
    storeId: null,
    dataList: []
  },
  onLoad (option) {
    // console.log(option)
    const {id: storeId, name: area, date} = option
    this.setData({storeId, area, date})
    this.getStoreAchievementById()
  },
  getStoreAchievementById () {
    action.storeAchievementById({
      date: this.data.date,
      id: this.data.storeId
    }).then(({data}) => {
      if (data) {
        this.setData({
          dataList: data.jsonArray
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }
})