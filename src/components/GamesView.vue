<template>
  <div class="columns">
    <h1>{{ msg }}</h1>
    <div class="column is-one-quarter-desktop" v-for="(game, gameKey) in games" :key="gameKey">
      <router-link :to="game.route">{{ game.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamesView',
  props: {
    msg: {
      type: String,
      default: '',
    },
    games: {
      type: [Object],
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
