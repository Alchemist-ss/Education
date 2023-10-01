<template>
  <div class="case-post">
    <h3>Список пользователей:</h3>
    <post-item v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import PostItem from "./Postitem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.case-post {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
}
</style>
