<template>
  <div>
    <nav class="navbar bg-light">
      <h2 class="navbar-brand" style="display: inline">My blog</h2>
      <nav-bar v-on:page-update="updatePage()" :active="dataCurrentPage"/>
    </nav>
    <div class="container bg-white mt-3 p-2">
      <component :is="dataCurrentPage" v-on:page-update="updatePage"
                 @on-error="onError()">
      </component>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import routes from './routes';

// Pages
import Posts from './components/pages/Posts';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SinglePost from './components/pages/SinglePost';

export default {
  name: 'App',
  components: {
    NavBar,
    // list of pages
    Posts,
    NotFound,
    Home,
    About,
    SinglePost,
  },
  props: ['current-page'],
  data() {
    return {
      dataCurrentPage: this.currentPage,
    };
  },
  methods: {
    updatePage() {
      if (window.location.pathname.indexOf('/post/') !== -1) {
        this.dataCurrentPage = 'SinglePost';
      } else {
        this.dataCurrentPage = routes[window.location.pathname];
      }
    },
    onError() {
      this.dataCurrentPage = 'NotFound';
    },
  },
};
</script>

<style>

</style>
