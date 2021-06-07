// pages/home/Clock/Clock.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: {
      user_id: "",
      record_data: ""
    },
    clock_data:[{motion:"nothing"}],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var clock_d= require("./clock_data");
    that.setData({
      clock_data:clock_d
    })
   console.log(that.data.clock_data);
    console.log(clock_d);

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
  doClock:function(e){
    var that=this;
    var record_d = e.currentTarget.dataset.clockres;
    that.setData({
      record:{
        user_id:app.globalData.user_id,
        record_data:record_d
      }
    })
    console.log(record_d);
    console.log(that.data.record);
  }

})