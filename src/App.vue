<template>
  <navbar></navbar>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script>
import { routerViewLocationKey } from "vue-router";
import Navbar from "./components/UI/Navbar.vue";

export default { components: { routerViewLocationKey, Navbar } };
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
}
</style>
