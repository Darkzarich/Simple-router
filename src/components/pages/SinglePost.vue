<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div>
          <img class="img-fluid" :src="post.urlToImage">
          <h2>{{post.title}}</h2>
          <hr>
          <div class="ml-3">
            {{post.content}}
            <span class="explanation">
              <i class="far fa-question-circle" id="explanation"></i>
            </span>
            <b-tooltip target="explanation">
              This site uses free developer plan for News API.
              Article content can be shown only up to 250 characters and
              remain ones will be shown as [+243 chars] for example. Please understand.
            </b-tooltip>
            <br><div class="mt-2">Source: <a :href="post.url">{{post.source.name}}</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import config from '../../config';

export default {
  name: 'SinglePost',
  data() {
    return {
      post: null,
    };
  },
  beforeCreate() {
    axios
      .get(window.location.pathname.replace(config.baseURL, '').toLowerCase().replace(
        /\/post\/(.+)/,
        'https://newsapi.org/v2/everything?' +
          'q=$1&' +
          'sources=abc-news&' +
          'language=en&' +
          'sortBy=publishedAt&' +
          'apiKey=e217204f2c0d42cca5708d70b60f1fd4'))
      .then((response) => {
        this.post = response.data.articles[0];
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

<style lang="sass" scoped>
  .explanation
    color: var(--blue)
</style>
