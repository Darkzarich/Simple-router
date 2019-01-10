<template>
<div>
  <nav-link href="/"> Home </nav-link>
  <nav-link href="/about"> About</nav-link>
  <nav-link href="/pages"> Pages </nav-link>
</div>
</template>

<script>
import NavLink from './NavLink';

export default {
  name: 'NavBar',
  components: {
    NavLink,
  },
};
</script>

<style lang="sass" scoped>
div
  display: inline-block
</style>
