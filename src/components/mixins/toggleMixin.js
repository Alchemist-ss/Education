export default {
  props: {
    show: {
      typeof: Boolean,
      default: false,
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  },
  mounted() {

  }
}