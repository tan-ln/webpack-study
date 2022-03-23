<template>
  <div id="app" class="app">
    <div class="app__content">
      <p class="app__content__p">
        some thing ok
      </p>
    </div>
    <img src="./assets/superman.gif" alt="superman">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './valiable.scss';
.app {
  &__content {
    text-align: center;
    background-color: $bg__color;
    &__p {
      font-size: $font__size;
    }
  }
}
</style>
