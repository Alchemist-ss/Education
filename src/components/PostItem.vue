<template>
  <div class="post">
    <div class="post__case">
      <div class="post__item">
        <div>{{ post.id }}</div>
        <div><strong>Название: </strong> {{ post.title }}</div>
        <div><strong>Описание: </strong> {{ post.body }}</div>
      </div>
      <div>
        <my-button @click="$emit('remove', post)">Удалить</my-button>
      </div>
    </div>
    <div class="post__reaction">
      <reaction />
    </div>
  </div>
</template>

<script>
import Reaction from "./Reaction.vue";
export default {
  components: {
    Reaction,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  border-radius: 5px;

  &__case {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    padding-right: 15px;
  }
}
</style>
