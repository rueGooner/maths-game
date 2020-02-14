<template>
  <section class="section">
    <div class="container">
      <div class="column is-full-mobile">
        <h1 class="title is-1 has-text-centered">Addition</h1>
      </div>
      <div class="columns">
        <b-button type="is-primary" @click="generateNewSum"
          >Generate New Sum</b-button
        >
      </div>
      <div class="columns is-mobile">
        <div class="column is-third-mobile">
          <b-field>
            <b-input
              size="is-large"
              disabled
              rounded
              :placeholder="getFirstNumber"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-icon icon="plus-thick" size="is-medium" type="is-dark"></b-icon>
        </div>
        <div class="column is-third-mobile">
          <b-field>
            <b-input
              size="is-large"
              disabled
              rounded
              :placeholder="getSecondNumber"
            ></b-input>
          </b-field>
        </div>
        <!-- <div class="column">
          <b-icon icon="equal" size="is-medium" type="is-dark"></b-icon>
        </div>
        <div class="column is-third-mobile">
          <b-field>
            <b-input rounded placeholder="Number"></b-input>
          </b-field>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'addition',

  methods: {
    generateNewSum() {
      this.$store.dispatch('generateNewSum', { min: 1, max: 20 });
    },
  },
  computed: {
    getFirstNumber() {
      return this.$store.getters.getFirstNumber;
    },
    getSecondNumber() {
      return this.$store.getters.getSecondNumber;
    },
  },
};
</script>

<style lang="scss">
.control input {
  text-align: center;
}
</style>
