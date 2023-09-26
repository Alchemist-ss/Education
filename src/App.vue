<template>
  <div class="body">
    <post-form />
    <post-list :posts="posts" />
    <reaction />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import Reaction from "./components/Reaction.vue";

export default {
  components: {
    PostForm,
    PostList,
    Reaction,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Что-то насущьное", body: "Есть мы или нас нет?" },
        { id: 2, title: "Неочень важное", body: "Что было нашим зарождением" },
        { id: 3, title: "Супер важное", body: "Мир это вселенная?" },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
</style>
