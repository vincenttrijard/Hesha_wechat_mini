// pages/landing/components/drink-section.js
Component({
  /**
   * Component properties
   */
  properties: {
    drinks: { type: Array, value: [] },
    label: { type: String, value: null }
  },

  /**
   * Component initial data
   */
  data: {

  },
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
    })
  },

  /**
   * Component methods
   */
  methods: {
    goToRecipe: function (e) {
      console.log(999,e)
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/recipe/recipe?id=${id}`,
      })
    },
  }
})
