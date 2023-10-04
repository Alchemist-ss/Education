<template>
  <button class='button-v2'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button-v2'
}
</script>

<style lang="scss" scoped>
.button-v2 {
  background: rgb(95, 164, 253);
  border: 1px solid rgb(175, 205, 250);
  border-radius: 5px;
  width: 30%;
  margin-top: 15px;
  padding: 10px;
  color: white;
}
</style>