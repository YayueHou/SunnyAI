// pages/Motiontest/Testend/Testend.js
var good = "状态不错哦，继续保持";
var bad = "你看起来有些焦虑";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testresult: "",
    endstate: "您本次答题的结果是",
    score:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    
    console.log(options.user_score);
    // var user_score = require("../Questions/Questions");
    //   console.log(this.questions);
    if (options.user_score<= 16) {
      that.setData({
        /*endstate: that.data.endstate+'\n'  + user_score + '分'+'\n'  + that.data.testresult.good*/
        testresult: good
      })
    }
    else {
      that.setData({
        /*  endstate: that.data.endstate+'\n' + user_score+ '分'+'\n'  + that.data.testresult.bad*/
        testresult: bad
      })
    }
    that.setData({score: options.user_score+"分"})

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
  getRecommend: function () {
    wx.navigateTo({
      url: "../../Recommend/Recommend"
    })
  }
})