// pages/Motiontest/Questions/Questions.js
var aa;
var qu = 0;
var user_score = 0;
const app = getApp();
const question_default = "请根据自身情况选择选项选项"
Page({
  /* 页面的初始数据*/
  data: {
    questions:
    {
      question_data: question_default,
      question_id: 0,
      question_type: "",
      answers: [
        { message: "点击开始", score: 0 }
      ]
    },
    answer: [
      {
        question_id: "",
        answer_data: ""
      }
    ]
  },
  /**
  * 生命周期函数--监听页面加载
  **/
  onLoad: function (options) {
    var that = this;
    var questions1 = require("/Questiondata/Questiondata.js");

    wx.request({
      url: app.globalData.oldurl + 'search_question?',
      data: {
        type: '第一类问卷'
      },
      header: { "content-type": "application/text" },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        aa = result.data.data.length;
        that.setData({
          questions: {
            question_data: result.data.data[qu].question_data,
            question_type: result.data.data[qu].question_type,
            answers: [
              { message: result.data.data[qu].answer_6points, score: 1 },
              { message: result.data.data[qu].answer_5points, score: 2 },
              { message: result.data.data[qu].answer_4points, score: 3 },
              { message: result.data.data[qu].answer_3points, score: 4 },
              { message: result.data.data[qu].answer_2points, score: 5 },
              { message: result.data.data[qu].answer_1points, score: 6 },
              { message: result.data.data[qu].answer_0points, score: 7 }
            ],
            question_id: result.data.data[qu].question_id
          }
        });
      },
      fail: () => { console.log("连接失败"); },
      complete: () => { },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   **/
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   **/
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   **/
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   **/
  onUnload: function () {
    qu -= 1;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   **/
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   **/
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   **/
  onShareAppMessage: function () {

  },

  getQuestions: function (e) {
    if (qu < aa - 1) {
      console.log("onload");
      console.log(qu);
      console.log(aa);
      this.onLoad();
    }
    var that = this;

    var anmessage = e.currentTarget.dataset.anmessage;
    user_score += e.currentTarget.dataset.anscore;

    if (qu == 0) {
      that.setData({
        answer: [
          {
            question_id: that.data.questions.question_id,
            answer_data: anmessage
          }
        ]
      })
    }
    else {
      var newanswer = { question_id: that.data.questions.question_id, answer_data: anmessage };
      that.data.answer.unshift(newanswer);
      that.setData({
        answer: that.data.answer
      });
    }
    if (qu >= aa - 1) {
      wx.request({
        url: app.globalData.oldurl + 'add_answer?id=' + '18616338025',
        data: that.data.answer,
        header: { 'content-type': 'application/json' },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result) => {
          console.log(result.data)
        },
        fail: () => {
          console.log("fail");
        }
      })


      wx.request({
        url: app.globalData.oldurl + 'add_answer?id=' + '18616338025',
        data: that.data.answer,
        header: { 'content-type': 'application/json' },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result) => {
          console.log(result.data)
        },
        fail: () => {
          console.log("fail");
        }
      })


      wx.navigateTo({
        url: '../Testend/Testend?user_score=' + user_score
      })
    }
    else { }

    console.log("answer");
    console.log(that.data.answer);
    console.log(anmessage);

    qu = qu + 1;
  },

});

