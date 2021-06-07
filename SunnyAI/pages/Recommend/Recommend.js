// pages/Recommend/Recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*  articles:[
        {
            articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
            articleImage:"/assets/article.png",
            nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png" ,
          nextpage:"/pages/Recommend/Articles/Article1"     },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
        {
          articleTitle:"心情不好？以下是晴天AI为您智能推荐的疏解方案（文章）",
          articleImage:"/assets/article.png",
          nextpage:"/pages/Recommend/Articles/Article1"
        },
    ]*/
    articles: [{
      articleTitle: "",
      articleImage: "",
      nextpage: ""
    }]

  },
  imageLoad: function (e) {
    var $width = e.detail.width;    //获取图片真实宽度
    return $width;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var articlelist = require("./ArticleList.js");
    console.log(articlelist);
    that.setData({
      articles: articlelist.articles
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
    wx.switchTab({
      url: "../../home/home",
    })
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
  goArticle(e) {
    var urlnext = e.currentTarget.dataset.urlnext;
    console.log(urlnext);
    wx.navigateTo({
      url: urlnext
    })
  }
})