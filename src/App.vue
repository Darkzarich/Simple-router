<template>
  <div>
    <h3>My blog - {{currentPage}}</h3>
    <hr>
    <nav-bar v-on:page-update="updatePage()"/>
    <hr>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import routes from './routes';

// Pages
import Page1 from './components/pages/Page-1';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';

export default {
  name: 'App',
  components: {
    NavBar,
    // Pages
    Page1,
    NotFound,
    Home,
    About,
  },
  props: ['current-page'],
  methods: {
    updatePage() {
      this.currentPage = routes[window.location.pathname];
    },
  },
};
</script>

<style>

</style>
