<template>
  <div class="logo__container">
    <router-link class="logo__link" to="/">
      <span class="logo__text">
        RAWG
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
  .logo {
    &__container {
      width: auto;
      padding-left: 10px;
    }

    &__link {
      color: $primary;
    }

    &__text {
      font-size: 1.125rem;
      font-weight: 900;
      font-family: 'Blink-bold', sans-serif;
      line-height: 1;
      letter-spacing: 0.3125rem;
    }
  }
</style>