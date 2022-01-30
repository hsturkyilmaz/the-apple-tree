<template>
  <div class="basket">
    <ul class="list">
      <li
        v-for="apple in applesInBasket"
        :key="apple.name"
        class="apple"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'Basket',

  computed: {
    applesInBasket: () => store.state.applesInBasket
  }
}
</script>

<style scoped>

.list {
  display: flex;
  flex-wrap: wrap-reverse;
  margin-top: 2rem;
}

.apple {
  width: 40px;
  height: 40px;
  background-image: url("../assets/apple.svg");
  background-size: 40px 40px;
}

.basket {
  width: 250px;
  height: 250px;
  background-image: url("../assets/basket.svg");
  background-size: 250px 250px;
}

</style>