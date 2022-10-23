<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: 'Blink-bold';
  src: url("./assets/fonts/Roboto-Black.ttf");
}

@font-face {
  font-family: 'Blink-regular';
  src: url("./assets/fonts/Roboto-Regular.ttf");
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Blink-regular", sans-serif;
}

body {
  margin: 0;
  line-height: 1.5;
  background-color: #151515;
}

.app {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

a {
  text-decoration: none;
}

select:focus, input:focus{
  outline: none;
}

.display-none{
  display: none;
}
</style>
