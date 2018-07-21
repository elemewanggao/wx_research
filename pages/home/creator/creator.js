Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [{
      vote_id: 1,
      image_url: '/images/home.png',
      title: '投票',
      voteNum: 80,
      selType: 1
    },
    {
      vote_id: 2,
      image_url: '/images/home.png',
      title: '投票',
      voteNum: 80,
      selType: 1
    },
    {
      vote_id: 3,
      image_url: '/images/home.png',
      title: '投票',
      voteNum: 80,
      selType: 1
    }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapView: function(e) {
      console.log('tapView', e)
      var vote_id = e.currentTarget.dataset.index
      console.log('vote_id', vote_id) 
      wx.navigateTo({
        url: '/pages/vote/lookCommit/lookCommit'
      })
    }
  }
})