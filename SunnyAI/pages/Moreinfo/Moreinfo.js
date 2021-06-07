// pages/Recommend/Recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Moreinfo:[
      {
          InfoTitle:"",
          InfoImage:"",
          Infonextpage:""
      }]
      /*
    Moreinfo:[
      {
          InfoTitle:"同济大学心理服务0219999999",
          InfoImage:"/assets/article.png",
          Infonextpage:"/pages/Recommend/Articles/Article1"
      },
      {
        InfoTitle:"同济大学学院辅导员17182928372",
        InfoImage:"/assets/article.png",
        Infonextpage:"/pages/Recommend/Articles/Article1"
      },
      {
        InfoTitle:"同济大学心理坊预约方式",
        InfoImage:"/assets/article.png" ,
        Infonextpage:"/pages/Recommend/Articles/Article1"     },
      {
        InfoTitle:"xxx老师18882032942",
        InfoImage:"/assets/article.png",
        Infonextpage:"/pages/Recommend/Articles/Article1"
      }
  ]
*/
  },
  imageLoad: function(e) {
    var $width=e.detail.width;    //获取图片真实宽度
        return  $width;
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var moreinfo = require("./Info.js");
    console.log(moreinfo);
    that.setData({
      Moreinfo: moreinfo.moreinfo
    })
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
  goInfo(e) {
     var urlnext= e.currentTarget.dataset.urlnext;
     console.log(urlnext);
     wx.navigateTo({
        url:urlnext
     })
  }
})