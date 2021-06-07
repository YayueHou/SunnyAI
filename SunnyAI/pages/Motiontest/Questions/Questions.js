// pages/Motiontest/Questions/Questions.js

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
      question_type: "",
      answers: [
        { message: "点击开始", score: 0 }
      ]
    },
    answer: [
      {
        question_id: "9",
        answer_data: "aaaaaa"
      }
    ]
  },
  /**
  * 生命周期函数--监听页面加载
  **/
  onLoad: function (options) {
    var that = this;
    var questions1 = require("/Questiondata/Questiondata.js");
    //   console.log(this.questions);
    // console.log(questions1.questions[0]);
    //  console.log(this.questions);
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
    var that = this;
    var questions1 = require("/Questiondata/Questiondata.js");
    var anmessage = e.currentTarget.dataset.anmessage;
    var aa;
    user_score += e.currentTarget.dataset.anscore;

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
        if (qu >= aa) {
          wx.navigateTo({
            url: '../Testend/Testend?user_score=' + user_score
          })
        }
        else
        // console.log(result.data),
        {
          console.log(result.data);
          console.log("that.data.question_data");
          console.log(result.data.data[0]);
          console.log(result.data[1]);
      
          console.log(aa);
          if (qu >= aa) {
            wx.navigateTo({
              url: '../Testend/Testend?user_score=' + user_score
            })
          }

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
              answer:[
                {
                  question_id: result.data.data[qu].question_id,
                  answer_data: that.anmessage
                }
              ]
            },
          });
          console.log("aa");
          console.log(aa);
          console.log(qu);

          if (qu < aa) {
            /* if (user_score) {
               wx.request({
                 url: app.globalData.oldurl + 'add_question',
                 data: {
                   question_data: "感到做什么事都没兴趣，没意思",
                   question_type: "第四类问卷",
                   answer_6points: "没有",
                 },
                 header: { "content-type": "application/json" },
                 method: 'POST',
                 dataType: 'json',
                 responseType: 'text',
                 success: (re) => {
                   console.log(res.data);
                 },
                 fail: (res) => { console.log("连接失败");
                 console.log(res.data);
                },
                 complete: (res) => {
                   console.log(res.data);
                  }
       
               });
             }*/
          }
          else {
            wx.navigateTo({
              url: '../Testend/Testend?user_score=' + user_score
            })
          }

        }
      },
      fail: () => { console.log("连接失败"); },
      complete: () => { }
    });
    qu = qu + 1;
    wx.request({
      url: app.globalData.oldurl + 'add_answer?id=' + '18616338025',
      data: that.data.answer,
      header: { 'content-type': 'application/json' },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result.data)
      }
    })
  }
}) 