// const host = 'http://192.168.247.1:8080'
// const host = 'http://bobo.easy.echosite.cn'
// const host = 'http://101.132.134.137:5600'
const host = 'https://salesreports.dlt-world.com'
let api = {
    login: `${host}/api/login`, // 登陆
    logout: `${host}/api/logout`, // 登出
    // 管理人员页面
    areaAchievementByDate: `${host}/api/area/getAchievementByDate`, // 获取管理人员当天或某天业绩
    areaAchievementByMonth: `${host}/api/area/getAchievementByMonth`, // 获取管理人员本月业绩
    areaAchievementByRangeTime: `${host}/api/area/getAchievementByRangeTime`, // 获取管理人员某个时间段业绩
    areaAchievementByWeek: `${host}/api/area/getAchievementByWeek`, // 获取管理人员本周业绩
    // 门店
    fillData: `${host}/api/store/fillInData`, // 填入数据
    storeAchievementById: `${host}/api/store/getAchievementById`, // 获取门店业绩详情
    storeAchievementByMonth: `${host}/api/store/getAchievementByMonth`, // 获取本月业绩
    storeAchievementByRangeTime: `${host}/api/store/getAchievementByRangeTime`, // 获取某个时间段的业绩
    storeAchievementByWeek: `${host}/api/store/getAchievementByWeek`, // 获取本周业绩
    storeAchieventmentByDate: `${host}/api/store/getAchieventmentByDate`, // 根据日期获取业绩
    // 模板
    getTemplate: `${host}/api/template/getTemplate`, // 获取模板
    // 排行榜
    getAreaRank: `${host}/api/rank/getAreaRank`, // 获取大区排行榜
    getRank: `${host}/api/rank/getRank`, // 获取区域排行
    getStoreRank: `${host}/api/rank/getStoreRank` // 获取区域下的门店排行
  }
  module.exports = {
    host,
    ...api
  }