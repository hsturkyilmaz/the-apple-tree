<template>
  <div>
    <div
      class="tree"
      :class="treeShaking ? 'shake-bottom' : ''"
    >
      <Apples class="apples"></Apples>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'
import Apples from './Apples.vue'

export default {
  name: 'Tree',

  components: {
    Apples
  },

  computed: {
    treeShaking: () => store.state.treeShaking 
  }
}
</script>

<style scoped>

.tree {
  width: 750px;
  height: 750px;
  background-image: url("../assets/tree.svg");
  background-repeat: no-repeat;
  background-size: 750px 750px;
  padding: 8rem 0 0 7rem;
}

.apples {
  width: 500px;
  height: 500px;
}

.shake-bottom {
  -webkit-animation: shake-bottom 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: shake-bottom 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}

@keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}

</style>