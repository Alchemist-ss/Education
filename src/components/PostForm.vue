<template>
  <div class="case-for-post">
    <form @submit.prevent class="form">
      <h2>Создание постов:</h2>
      <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Название"
      />
      <my-input v-model="post.body" type="text" placeholder="Описание" />
      <my-button-v2 @click="createPost">Создать</my-button-v2>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      if (this.post.title.trim() !== "" && this.post.body.trim() !== "") {
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.case-for-post {
  width: 500px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
