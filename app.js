App({
  onLaunch: function () {
    console.log('onLoad')
    var that = this
    var user = wx.getStorageSync('user')
    console.log('user, !user', user, !user)
    var user = false
    if (!user) {
      wx.login({
        success: function (res) {
          var code = res.code
          console.log('code', code)
          if (code){
            wx.getUserInfo({
              withCredentials: true,
              success: function (res_user) {
                wx.request({
                  url: 'http://localhost:7000/weixin/login/check',
                  data: {
                    js_code: code
                  },
                  method: 'get',
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function(res){
                    console.log('login', res)
                    console.log('openid', res.data.result.openid)
                    wx.setStorageSync('openId', res.data.result.openid)
                  }
                },
                )
                wx.setStorageSync('user', res_user.userInfo)
                console.log('userhah', res_user.userInfo)
              },
              fail: function (e) {
                wx.navigateTo({
                  url: '/pages/authorize/authorize',
                })
              }

            })
          }

          

        }
      })
    }
    else {
      console.log('else')

      console.log('else end')
      wx.navigateTo({
        url: '/pages/new/new',
      })
    }

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})