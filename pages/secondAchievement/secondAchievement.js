Page({
  data: {
    code: '',
    areaId: '',
    date: '',
    area: '',
    showAchievementDom: false
  },
  onLoad (option) {
    // console.log(option)
    const {code, date, id: areaId, area} = option
    let showAchievementDom = false
    if (code || date || areaId || area) {
      showAchievementDom = true
    }
    this.setData({code, date, areaId, area, showAchievementDom})
  }
})