<template>
  <div>
    <h3>My app</h3>
    <hr>
    <div :is="currentPage"></div>
  </div>
</template>

<script>
import Page1 from './components/Page-1';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';

export default {
  name: 'App',
  components: {
    Page1,
    NotFound,
    Home,
    About,
  },
  props: ['current-page'],
};
</script>

<style>

</style>
