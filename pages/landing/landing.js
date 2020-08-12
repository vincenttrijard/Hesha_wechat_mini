// pages/posts/posts.js
const app = getApp()
const base_url = app.globalData.base_url
// const recipes = app.globalData.recipes;
Page({


  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(recipes)
    this.setData({
      recipes: recipes
    })
  },
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
    })
  },
  GoToMulti: function(event){
    wx.navigateTo({
      url: '/pages/multi/multi'
  })
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



  goToPost: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/post/post?id=${id}`,
    })
  },

  onShareAppMessage(){
    // return {
    //   title: "Have a look at this!",
    //   desc: "Let's learn how to make it",
    //   path: "/pages/post/post"
  },
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

  GoToSearch: function (e) {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  },

})