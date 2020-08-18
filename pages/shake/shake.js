// pages/shake/shake.js
// var socketOpen = false;
// var count = 0;
// var SocketTask;
// var url = 'xxxx';
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  /**
   * Page initial data
   */
  data: {
  
    swing: false, 

  },

  /**
   * Lifecycle function--Called when page load
   */
  selectAnimate(e){
    this.setData({
        swing: true
    })
},
  onLoad: function (options) {
    let page = this
    wx.onAccelerometerChange(function (e) {
      if (e.x > .3 && e.y > .3) {
        console.log(e)
        page.selectAnimate()
        const rand = Math.floor(Math.random() * 78) + 1;
        // page.setData({
        //   id: rand
        // })
        // setTimeout(function () {
        //   console.log 
        //   const id = this.data.id
          wx.navigateTo({
            url: `/pages/recipe/recipe?id=${rand}`,
          })
        //  }, 1000) 
      }
    });
  },




  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
   
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
   
  },
  
  
  
  // },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
  
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },



  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  
})

