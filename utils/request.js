const post = function (url, params = {}) {
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      let element = params[key]
      if (element instanceof Array) {
        params[key] = JSON.stringify(element)
      }
    }
  }
  let sessionKey = wx.getStorageSync('sessionKey') || '',
    promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: params,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'session-Token': sessionKey,
      },
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        if (res.data && res.data.code === 0) {
          resolve(res.data)
        } else if (res.data && res.data.code === 500106) {
          wx.clearStorageSync()
          wx.reLaunch({
            url: '/pages/login/login'
          });
        } else {
          reject(res.data)
          if (res.data && res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none'
            })
          }
        }
      }
    })
  })
  return promise
}
const get = function (url, params = {}) {
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      let element = params[key]
      if (element instanceof Array) {
        params[key] = JSON.stringify(element)
      }
    }
  }
  let sessionKey = wx.getStorageSync('sessionKey') || '',
    promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      xhrFields: { withCredentials: true },
      data: params,
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'session-Token': sessionKey,
      },
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        if (res.data && res.data.code === 0) {
          resolve(res.data);
        } else if (res.data && res.data.code === 500106) {
          wx.clearStorageSync()
          wx.reLaunch({
            url: '/pages/login/login'
          });
        } else {
          reject(res.data)
          if (res.data && res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none'
            })
          }
        }
      }
    })
  })
  return promise
}
module.exports = {
  post,
  get
}