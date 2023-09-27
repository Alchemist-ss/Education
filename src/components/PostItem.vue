<template>
  <div class="post">
    <div><strong>Название: </strong> {{ post.title }}</div>
    <div><strong>Описание: </strong> {{ post.body }}</div>
    <reaction />
  </div>
</template>

<script>
import Reaction from "/src/components/Reaction.vue";
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
}
</style>
