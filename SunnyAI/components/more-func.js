// components/more-func.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
      goRecommend(){
        wx.navigateTo({
          url: '/pages/Recommend/Recommend'
        })
      },
      goMotiontest(){
        wx.navigateTo({
          url: '/pages/Motiontest/Motiontest'
        })
      },
      goMoreinfo(){
        wx.navigateTo({
          url: '/pages/Moreinfo/Moreinfo'
        })
      },
      goMusic(){
        wx.navigateTo({
          url: '/pages/music/music'
        })
      }
      }
    
  
})
