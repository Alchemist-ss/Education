<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
};
</script>

<style lang="scss" scoped>
button {
  padding: 5px;
  background: rgb(243, 243, 243);
  border: 1px solid teal;
  border-radius: 5px;
}
</style>
