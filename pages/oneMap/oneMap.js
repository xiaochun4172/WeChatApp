// pages/oneMap/oneMap.js
Page({

  /*** 页面的初始数据*/
  data: {

  },
  /*** 生命周期函数--监听页面加载*/
  onLoad: function (options) {

  },
  /*** 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },
  /*** 生命周期函数--监听页面显示*/
  onShow: function () {

  },
  /*** 生命周期函数--监听页面隐藏*/
  onHide: function () {

  },
  /*** 生命周期函数--监听页面卸载*/
  onUnload: function () {

  },
  /*** 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading({//导航栏显示正在加载的状态
      duration: 5000
    })
    wx.hideNavigationBarLoading()//关闭导航栏显示正在加载的状态
    wx.stopPullDownRefresh()
    console.log("好用不?")
    wx.showToast({
      title: '刷新成功',//提示信息
      icon: 'success',//成功显示图标
      duration: 1000//时间
    })

    // complete: function() {
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // }

  },
  /*** 页面上拉触底事件的处理函数*/
  onReachBottom: function () {

  },
  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {
    return{
      title:'城纪·一周一图',
      path:'pages/oneMap/oneMap'
    }
  }
})