// Page({
//   data: {
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   onLoad: function () {
//     // 查看是否授权
//     wx.getSetting({
//       success: function (res) {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称
//           wx.getUserInfo({
//             success: function (res) {
//               console.log(res.userInfo)
//             }
//           })
//         }
//       }
//     })
//   },
//   bindGetUserInfo: function (e) {
//     console.log(e.detail.userInfo)
//   }
// })

var app = getApp()
Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hidden: false
  },
  // getUserInfo: function () {
  //   var that = this

  //   if (app.globalData.hasLogin === false) {
  //     wx.login({
  //       success: _getUserInfo
  //     })
  //   } else {
  //     _getUserInfo()
  //   }

  //   function _getUserInfo() {
  //     wx.getUserInfo({
  //       success: function (res) {
  //         console.log(res)
  //         that.setData({
  //           hasUserInfo: true,
  //           userInfo: res.userInfo
  //         })
  //         that.update()
  //       }
  //     })
  //   }
  // },
  bindGetUserInfo: function (e) {
    console.log('user111', e.detail.userInfo)
    wx.setStorageSync('user', e.detail.userInfo)
    wx.switchTab({
      url: '/pages/new/new',
    })
  },
})
