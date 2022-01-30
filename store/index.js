import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// A new Vuex store and has been declared. 
export default new Vuex.Store({
  // A new state object with applesInTree, applesInBasket arrays and treeShaking boolean has been declared.
  state: {
    applesInTree: [
      { name: "apple_01", falling: false, style: "margin-right: 200px; margin-top: 75px" },
      { name: "apple_02", falling: false, style: "margin-right: 50px; margin-top: 375px" },
      { name: "apple_03", falling: false, style: "margin-right: 475px; margin-top: 200px" },
      { name: "apple_04", falling: false, style: "margin-right: 250px; margin-top: -75px" },
      { name: "apple_05", falling: false, style: "margin-right: -50px; margin-top: 175px" },
      { name: "apple_06", falling: false, style: "margin-right: 150px; margin-top: 300px" },
      { name: "apple_07", falling: false, style: "margin-right: 0px; margin-top: 0px" },
      { name: "apple_08", falling: false, style: "margin-right: 350px; margin-top: 125px" },
      { name: "apple_09", falling: false, style: "margin-right: 100px; margin-top: 150px" },
      { name: "apple_10", falling: false, style: "margin-right: 400px; margin-top: 400px" },
      { name: "apple_11", falling: false, style: "margin-right: 300px; margin-top: 250px" },
      { name: "apple_12", falling: false, style: "margin-right: 375px; margin-top: 0px" }
    ],
    applesInBasket: [],
    treeShaking: false,
  },

  mutations: {
    /* First, it checks if there are any apples in the tree.
    If there are, it loops through the array of apples and sets each one’s falling property to true.
    Then, it uses setTimeout to call the function that adds the apples to the basket. */
    dropApples(state, payload) {
      if (state.applesInTree.length !== 0) {
        for (let i = 0; i < payload; i++) {
          state.applesInTree[i].falling = true;
          setTimeout(() => state.applesInBasket.push(state.applesInTree.shift()), 2000);
        }
      }
    },

    /* It checks to see if there are any apples in the tree.
    If there are, it sets the treeShaking property to true.
    It sets a timeout of 3000 milliseconds (3 seconds) to set the treeShaking property back to false. */
    shakeTree(state) {
      if (state.applesInTree.length !== 0) {
        state.treeShaking = true;
        setTimeout(() => state.treeShaking = false, 3000);
      };
    },
  },

  actions: {
    /* If the number of apples in the tree is not zero, then commit the “shakeTree” mutation.
    Then, set a timeout of 3000 milliseconds (3 seconds) to commit the “dropApples” mutation.
    The “dropApples” mutation will randomly drop between 1 and 6 apples from the tree.
    If there are no apples in the tree, the apples in the basket are moved to the tree. */
    chooseApples({ commit }) {
      if (this.state.applesInTree.length !== 0) {
        commit('shakeTree');
        setTimeout(() => commit('dropApples', Math.floor(Math.random() * 6 + 1)), 3000);
      } else {
        this.state.applesInTree = this.state.applesInBasket;
        this.state.applesInBasket = [];
        this.state.applesInTree.map((apple) => apple.falling = false);
      }
    }
  }
})
