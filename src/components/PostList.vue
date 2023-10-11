<template>
  <div v-if="posts.length > 0" class="case-post">
    <h3>Список постов:</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red; margin-top: 20px">Список постов пуст!</h2>
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
