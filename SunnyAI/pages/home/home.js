// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultUserHead:'/assets/default-user.png',
    userInfo:{
      avatarUrl:'',
      nickName:'lovely',
      integral:0
    },
    integralInfo:{
      accumulateDay:0,
      persistentDay:0
    },
    rankHeads:[
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132'
    ],
    isClock:false//控制是否打卡
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onGetUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          isClock:true
        })
      }
    })
  },
  goRank(){
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  goStatement(){
    wx.navigateTo({
      url: '/pages/statement/statement',
    })
  }
})