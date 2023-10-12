<template>
  <div v-if="posts.length > 0" class="case-post">
    <h3>Список постов:</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
</style>
