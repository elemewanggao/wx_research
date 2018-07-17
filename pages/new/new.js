Page({
  data:{},
  navigateToVote: function(e) {
    wx.navigateTo({
      url: '../vote/vote',
    })
  }
})