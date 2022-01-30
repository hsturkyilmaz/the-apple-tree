<template>
  <div>
    <ul class="list">
      <li
        v-for="apple in applesInTree"
        :key="apple.name"
        class="apple"
        :class="apple.falling === true ? 'apple-fall' : ''"
        :style="apple.style"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'Apples',

  computed: {
    applesInTree: () => store.state.applesInTree ,
    appleFalling: () => store.state.appleFalling,
  }
}
</script>

<style scoped>

.list {
  display: flex;
  justify-content: flex-end;
}

.apple {
  width: 40px;
  height: 40px;
  background-image: url("../assets/apple.svg");
  background-size: 40px 40px;
  position: absolute;
}

.apple-fall {
  margin-top: 600px !important;
  transition: margin-top 1s ease-in 0s;
}

</style>