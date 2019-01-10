<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <h3>{{page.title}}</h3>
      <q>{{page.body}}</q>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PagesView',
  data() {
    return {
      pages: [],
    };
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.pages = response.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
