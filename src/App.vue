<template>
  <div>
    <h3>My app - {{currentPage}}</h3>
    <hr>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import Page1 from './components/pages/Page-1';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';

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
