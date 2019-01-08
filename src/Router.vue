<template>
  <App :current-page="Home"/>
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
      currentRoute: window.location.pathname,
    };
  },

};
</script>

<style scoped>

</style>
