import api from './api'
import { post, get } from './request'
const app = getApp(),
  date = app.formateDate().today,
  publicParams = () => {
    let {code, areaId, storeId} = app.globalData.loginInfo
    return {
      code, areaId, storeId
    }
  }
const action = {
  login: (params) => post(api.login, params),
  logout: () => get(api.logout),
  areaAchievementByDate: (params) => get(api.areaAchievementByDate, { code: publicParams().code, areaId: publicParams().areaId, ...params }),
  areaAchievementByMonth: () => get(api.areaAchievementByMonth, { code: publicParams().code, areaId: publicParams().areaId }),
  areaAchievementByRangeTime: (params) => get(api.areaAchievementByRangeTime, { code: publicParams().code, areaId: publicParams().areaId, ...params }),
  areaAchievementByWeek: () => get(api.areaAchievementByWeek, { code: publicParams().code, areaId: publicParams().areaId }),
  fillData: (params) => get(api.fillData, params),
  storeAchievementById: (params) => get(api.storeAchievementById, params),
  storeAchievementByMonth: () => get(api.storeAchievementByMonth, { id: publicParams().storeId }),
  storeAchievementByRangeTime: (params) => get(api.storeAchievementByRangeTime, { id: publicParams().storeId, ...params }),
  storeAchievementByWeek: (params) => get(api.storeAchievementByWeek, { id: publicParams().storeId }),
  getTemplate: () => get(api.getTemplate),
  getAreaRank: (params) => get(api.getAreaRank, { start: 1, stop: -1, code: publicParams().code, ...params }),
  getRank: (params) => get(api.getRank, { code: publicParams().code, areaId: publicParams().areaId, ...params }),
  getStoreRank: (params) => get(api.getStoreRank, { code: publicParams().code, areaId: publicParams().areaId, ...params })
}
module.exports = action