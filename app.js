App({
  onLaunch: function () {
    console.log('logging in')
    let page = this
    wx.login({
      success (res) {
        console.log('login', res)

      wx.request({

         url: "https://hesha.wogengapp.cn/api/v1/login",
        // url: "http://localhost:3000/api/v1/login",
        method: 'post',
        data: {
          code: res.code
        },
      success: (res) => {
      console.log('login res', res)
        page.globalData.userId = res.data.userId
      }
      })
      }
    })
  },

  
  globalData: {
    userInfo: null,
    userId: null,
    likeList: [],

    // base_url: "http://localhost:3000/api/v1"
    base_url: "https://hesha.wogengapp.cn/api/v1" 

    }
})



