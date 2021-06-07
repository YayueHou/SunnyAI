// pages/barometer/barometer.js
var wxCharts = require('../../utils/wxcharts.js')
var app = getApp()
var lineChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textcolor1: '#014f8e',
    textcolor2: '#bfbfbf',
    max:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var x_data = ["6.1","6.2","6.3","6.4","6.5","6.6","6.7"]
    var y_data = ["0","0","5","0","0","0","30"]
    this.data.max=Math.max.apply(null, y_data)+10
    //绘制折线图
    this.OnWxChart(x_data, y_data, '图表一')
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
  OnWxChart: function (x_data, y_data, name) {
    var windowWidth = '',
      windowHeight = ''; //定义宽高
    try {
      var res = wx.getSystemInfoSync(); //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690; //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 350 //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!'); //如果获取失败
    }
    lineChart = new wxCharts({
      canvasId: 'lineCanvas', //输入wxml中canvas的id
      type: 'line',
      legend:false,
      categories: x_data, //模拟的x轴横坐标参数
      animation: true, //是否开启动画
      series: [{
        name: name,
        data: y_data,
        format: function (val, name) {
          return val + '分';
        }
      }],
      xAxis: { //是否隐藏x轴分割线
        disableGrid: true,
        fontColor:'#898c97'
      },
      yAxis: { //y轴数据
        title: '', //标题
        fontColor:'#ffffff',
        format: function (val) { //返回数值
          return val;
        },
        min: 0, //最小值
        max:this.data.max,
        gridColor: '#ffffff',
      },
      width: windowWidth, //图表展示内容宽度
      height: windowHeight, //图表展示内容高度
      dataLabel: true, //是否在图表上直接显示数据
      dataPointShape: true, //是否在图标上显示数据点标志
      extra: {
        lineStyle: 'Broken' //曲线
      },
    });
  }
})