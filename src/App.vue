<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addition">Addition</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #404040;
$primary-invert: findColorInvert($primary);
$secondary: #8c67ef;
$info: #00aaff;
$success: #4bb543;
$warning: #ffaa00;
$danger: #d00d00;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

#app {
  color: $primary;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary;

    &.router-link-exact-active {
      color: lighten($primary, 5%);
    }
  }
}
</style>
