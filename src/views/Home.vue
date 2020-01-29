<template>
  <div class="home">
    <GamesView msg="Welcome Ailani" :games="this.renderGames" />
  </div>
</template>

<script>
// @ is an alias to /src
import GamesView from '@/components/GamesView.vue';

export default {
  name: 'home',
  components: {
    GamesView,
  },
  data() {
    return {
      renderGames: [
        {
          name: 'Addition',
          route: '/addition',
        },
        {
          name: 'Subtraction',
          route: '/subtraction',
        },
      ],
    };
  },
};
</script>
