<template>
<div class="nav navbar-nav mr-auto mt-2 mt-lg-0" :class="activeLowerCase">
  <nav-link class="home nav-item" href="/"> Home </nav-link>
  <nav-link class="about nav-item" href="/about"> About</nav-link>
  <nav-link class="pagesview nav-item" href="/pages"> Pages </nav-link>
</div>
</template>

<script>
import NavLink from './NavLink';

export default {
  name: 'NavBar',
  props: ['active'],
  components: {
    NavLink,
  },
  computed: {
    activeLowerCase() {
      return this.active.toLowerCase();
    },
  },
};
</script>

<style lang="sass" scoped>

div
  display: inline-block

.nav.home .home,
.nav.about .about,
.nav.pagesview .pagesview
  font-weight: bold
  display: inline-block
  height: 100%

.nav a:hover
  text-decoration: none
</style>
