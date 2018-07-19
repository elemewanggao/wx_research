Page({
  data: {
    title: '',
    desc: '',
    options: [{
      content: '',
      uploadImageSrc: '/images/upload_image.png',
    }, {
      content: '',
      uploadImageSrc: '/images/upload_image.png',
    }],
    optionTypeRange: ['单选', '多选'],
    // 投票类型sel_type = picker_index + 1
    picker_index: 0,

    // 匿名投票按钮：false关 true开
    anonymousFlag: false,

    // 公开投票结果 true公开 false不公开
    openFlag: true,
    date: '2018-07-01',
    time: '00:01',
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
    console.log('title:', e.detail.value)
  },
  descInput: function (e) {
    this.setData({
      desc: e.detail.value
    })
    console.log('desc:', e.detail.value)
  },
  inputOptionValue: function (e) {
    var ops = this.data.options
    console.log('options:', ops)
    var index = e.target.dataset.opid
    for (var i = 0; i < ops.length; i++) {
      if (i == index) {
        this.data.options[i].content = e.detail.value
        break
      }
    }
  },
  addOption: function (e) {
    // 直接用this.data.options.input是不会生效的
    var ops = this.data.options
    ops.push({
      content: '',
      uploadImageSrc: '/images/upload_image.png',
    })
    this.setData({
      options: ops
    })
  },
  delOption: function (e) {
    console.log(e)
    console.log(e.target.dataset.opid)
    var ops = this.data.options
    var index = e.target.dataset.opid
    for (var i = 0; i < ops.length; i++) {
      if (i == index) {
        ops.splice(i, 1)
        break
      }
    }
    this.setData({
      options: ops
    })
  },
  chooseAndUpLoadImage: function (e) {
    var opid = e.target.dataset.opid
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log('res=', res)
        console.log('opid=', opid)
        var tempFilePath = res.tempFilePaths[0]
        wx.uploadFile({
          url: 'http://localhost:7000/file/upload',
          filePath: tempFilePath,
          name: 'image',
          success: function (res) {
            console.log('success', res)
            var tempFile = JSON.parse(res.data).result
            that.data.options[opid].uploadImageSrc = tempFile
          },
          fail: function (res) {
            console.log('fail')
          }
        })
      },
    })
    this.setData({
      options: that.data.options
    })
  },
  optionTypeSelect: function (e) {
    this.setData({
      picker_index: e.detail.value
    })
    console.log('单选还是多选:', this.data.picker_index)
  },
  anonymousSwitch: function (e) {
    var flag = this.data.anonymousFlag
    this.setData({
      'anonymousFlag': !flag
    })
  },

  openSwitch: function (e) {
    var flag = this.data.openFlag
    this.setData({
      'openFlag': !flag
    })
    console.log('公开投票结果', this.data.openFlag)
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    console.log('日期:', this.data.date)
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
    console.log('时间:', this.data.time)
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e)
    console.log(this.data.options)
  }
})