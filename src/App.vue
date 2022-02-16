<template>
  <div id="app">
    <Basket class="basket fix-width"></Basket>
    <Tree></Tree>
    <button class="button fix-width" @click="chooseApples()" :disabled="treeShaking">
      {{ applesInTree.length === 0 ? 'Reload Apples' : 'Shake Tree' }}
    </button>
  </div>
</template>

<script>
import store from '../store';
import Basket from './components/Basket.vue'
import Tree from './components/Tree.vue'

export default {
  name: 'App',

  components: {
    Basket,
    Tree
  },

  computed: { 
    applesInTree: () => store.state.applesInTree,
    treeShaking: () => store.state.treeShaking
  },

  methods: {
    chooseApples: () => store.dispatch('chooseApples'),
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  border: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  min-height: 100vh;
  padding: 0 3rem 3rem 3rem;
  background: rgb(59,255,0);
  background: linear-gradient(0deg, rgba(59,255,0,1) 0%, rgba(0,131,255,1) 35%);
}

.fix-width {
  width: 200px;
}

.button {
  width: 200px;
  height: 60px;
  background: #F4A63A;
  border: 0px;
  position: relative;
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  box-shadow: 
    inset -2px 2px 1px 1px #FFD989,
    inset -2px -2px 1px 1px #9E4D20,
    inset 2px 0px 1px 1px #F28133
}

.button:active {
  top: 2px;
}

.button::after {
  content: '';
   background: #000;
  position: absolute;
  left: -2%;
  top: 0;
  width: 104%;
  height: 100%;
  z-index: -1
}

.button::before {
  content: '';
   background: #000;
  position: absolute;
  left: 0;
  top: -5%;
  width: 100%;
  height: 110%;
  z-index: -2
}

</style>