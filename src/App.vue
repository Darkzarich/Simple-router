<template>
  <div>
    <nav class="navbar bg-light">
      <h2 class="navbar-brand" style="display: inline">My blog</h2>
      <nav-bar v-on:page-update="updatePage()" :active="dataCurrentPage"/>
    </nav>
    <div class="container bg-white mt-3 p-2">
      <component :is="dataCurrentPage"></component>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import routes from './routes';

// Pages
import PagesView from './components/pages/PagesView';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';

export default {
  name: 'App',
  components: {
    NavBar,
    // Pages
    PagesView,
    NotFound,
    Home,
    About,
  },
  props: ['current-page'],
  data() {
    return {
      dataCurrentPage: this.currentPage,
    };
  },
  methods: {
    updatePage() {
      this.dataCurrentPage = routes[window.location.pathname];
    },
  },
};
</script>

<style>

</style>
