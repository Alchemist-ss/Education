<template>
  <div class="body">
    <PostList />
    <PostForm />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue"
import PostList from "./components/PostList.vue"
import Reaction from "./components/reaction.vue"

export default {
  components: {
    PostForm, PostList, Reaction
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
      {id: 1, title: 'Что-то насущьное', body: 'Есть мы или нас нет?'},
      {id: 2, title: 'Неочень важное', body: 'Что было нашим зарождением'},
      {id: 3, title: 'Супер важное', body: 'Мир это вселенная?'},
    ],
    title: '',
    body: '',
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  }
}
</script>

<style lang="scss">
*{
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