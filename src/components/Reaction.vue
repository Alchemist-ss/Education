<template>
  <div class="reaction">
    <div class="reaction__info">
      <div>
        <div>
          Кол-во лайков: <strong>{{ likes }}</strong>
        </div>
        <div class="reaction__button">
          <my-button @click="addLike" style="margin: 5px">Лайк</my-button>
        </div>
      </div>
      <div>
        <div>
          Кол-во дизлайков: <strong>{{ dislikes }}</strong>
        </div>
        <div class="reaction__button">
          <my-button style="margin: 5px" @click="addDislike">Дизлайк</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.reaction {
  width: 100%;
  border-top: 2px solid teal;
  margin-top: 10px;
  padding-top: 10px;

  &__case {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &__info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  &__button {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
