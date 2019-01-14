<template>
  <App :current-page="viewComponent"/>
</template>

<script>
import App from './App';
import routes from './routes';
import config from './config';

export default {
  name: 'Router',
  components: {
    App,
  },
  data() {
    return {
      currentRoute: window.location.pathname.replace(config.baseURL, '').toLocaleLowerCase(),
      links: routes,
    };
  },
  computed: {
    viewComponent() {
      if (this.currentRoute.search(/post\/.+/) !== -1) {
        return 'SinglePost';
      }

      return routes[this.currentRoute] || 'NotFound';
    },
  },
};
</script>

<style scoped>

</style>
