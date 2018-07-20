Page({
  data: {
    vote: {
      vote_id: 0,
      title: 'This is a test vote',
      selType: 2,
      status: 1,
      deadline: '2018-08-01 12:00',
      participant_num: 20,
      desc: "This is a test vote",
    },
    selected_option_ids: [1, 2],
    items: [
      { option_id: 1, option_desc: '美国', vote_rate: 20, vote_num: 10, checked: false },
      { option_id: 2, option_desc: '中国', vote_rate: 60, vote_num: 10, checked: false },
      { option_id: 3, option_desc: '巴西', vote_rate: 30, vote_num: 10, checked: false },
      { option_id: 4, option_desc: '日本', vote_rate: 80, vote_num: 10, checked: false },
      { option_id: 5, option_desc: '英国', vote_rate: 1, vote_num: 10, checked: false },
      { option_id: 6, option_desc: '法国', vote_rate: 50, vote_num: 10, checked: false },
    ]
  },
  optionChange: function (e) {
    console.log(e)
    console.log(e.detail.value)
    var options = []
    if (!(typeof e.detail.value == 'object')) {
      options.push(e.detail.value)
    }
    else {
      options = e.detail.value
    }
    this.data.selected_option_ids = options
    console.log('selected_option_ids:', this.data.selected_option_ids)
  },

  formSubmit: function (e) {
    console.log(e)
  },

  onLoad: function (options) {
    console.log('selected_option_ids', this.data.selected_option_ids)
    var length = this.data.selected_option_ids.length
    var that = this

    for (var i = 0; i < length; i++) {
      console.log('find', this.data.items[i].checked)
      that.data.items[i].checked = true
    }
    this.setData({
      items: that.data.items
    })
  }
})