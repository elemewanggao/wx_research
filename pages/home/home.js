Page({
  /**
 * 组件的初始数据
 */
  data: {
    currentTab: 0
  },

  /**
   * 组件的方法列表
   */

    switchTab(e) {
      console.log(e)
      let tab = e.currentTarget.id
      if (tab === 'tableft') {
        this.setData({ currentTab: 0 })
      } else if (tab === 'tabright') {
        this.setData({ currentTab: 1 })
      }
    }

})