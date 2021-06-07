// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultUserHead: '/assets/default-user.png',
    userInfo: {
      avatarUrl: '',
      nickName: '点击获取用户信息',
      integral: 0
    },
    userSignal: "个性签名"

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
  onGetUserProfile:function() {
    if (!this.data.userInfo.avatarUrl) {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            isClock: true,
            userSignal:"希望一切都会顺利"
          })
        }
      })
      //wx.request({......})
     
    }
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  },
  goMychange: function () {
    wx.navigateTo({
      url: "./mychange/mychange"
    })
  },
  goCollect: function () {
    wx.navigateTo({
      url: "./collect/collect"
    })
  },
  goSetting: function () {
    wx.navigateTo({
      url: "./setting/setting"
    })
  },
  goFeedback: function () {
    wx.navigateTo({
      url: "./feedback/feedback"
    })
  }
})