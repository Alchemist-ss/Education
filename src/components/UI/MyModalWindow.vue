<template>
  <div class="modal-window" v-if="show" @click="hideModal">
    <div @click.stop class="modal-window__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal-window',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-window {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
}
</style>