<template>
  <App :current-page="viewComponent"/>
</template>

<script>
import App from './App';
import routes from './routes';

export default {
  name: 'Router',
  components: {
    App,
  },
  data() {
    return {
      currentRoute: window.location.pathname.toLocaleLowerCase(),
      links: routes,
    };
  },
  computed: {
    viewComponent() {
      if (this.currentRoute.indexOf('/post/') !== -1) {
        return 'SinglePost';
      }

      return routes[this.currentRoute] || 'NotFound';
    },
  },
};
</script>

<style scoped>

</style>
