<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div>
          <img class="img-fluid" :src="post.urlToImage">
          <h2>{{post.title}}</h2>
          <hr>
          <div class="ml-3">{{post.content}}</div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SinglePost',
  data() {
    return {
      post: null,
    };
  },
  beforeCreate() {
    /* eslint-disable no-console */
    /* eslint-disable no-alert */

    axios
      .get(window.location.pathname.toLowerCase().replace(
        /\/post\/(.+)/,
        'https://newsapi.org/v2/everything?' +
          'q=$1&' +
          'sources=abc-news&' +
          'language=en&' +
          'sortBy=publishedAt&' +
          'apiKey=e217204f2c0d42cca5708d70b60f1fd4'))
      .then((response) => {
        this.post = response.data.articles[0];
        console.log(response);
      })
      .catch(() => {
        this.onError();
      });
  },
  methods: {
    onError() {
      this.$emit('on-error');
    },
  },
};
</script>

<style scoped>

</style>
