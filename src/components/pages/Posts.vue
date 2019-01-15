<template>
  <div class="mx-2">
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPosts" v-model="currentPage" :per-page="perPage">
      </b-pagination>
    </div>
    <div class="row">
      <div v-for="post in posts" :key="post.url" class="col-12 col-md-3 mb-3">
        <div class="card h-100">
          <v-link :href="'/post/' + post.title">
            <img class="card-img-top" :src="post.urlToImage ? post.urlToImage : noImgURL">
          </v-link>
          <div class="card-body">
            <v-link :href="'/post/' + post.title">
              <h5 class="card-title">{{post.title}}</h5>
            </v-link>
            <p class="card-text">
              {{post.description}}
            </p>
          </div>
          <div class="card-footer">
            {{post.publishedAt | formatDate}}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPosts" v-model="currentPage" :per-page="perPage">
      </b-pagination>
      <br>
      <span class="attribution col-12 text-center">API for news powered by <a href="https://newsapi.org">newsapi.org</a></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavLink from '../NavLink';
import config from '../../config';

export default {
  name: 'Posts',
  components: {
    'v-link': NavLink,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      perPage: 12,
      totalRows: 100,
      noImgURL: config.noImgURL,
    };
  },
  created() {
    axios
      .get('https://newsapi.org/v2/everything?' +
        'sources=abc-news&' +
        'language=en&' +
        'sortBy=publishedAt&' +
        'apiKey=e217204f2c0d42cca5708d70b60f1fd4')
      .then((response) => {
        this.totalRows = response.data.totalResults;
      })
      .catch(() => {
        this.emit('on-error');
      });
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get('https://newsapi.org/v2/everything?' +
          'sources=abc-news&' +
          'language=en&' +
          'sortBy=publishedAt&' +
          'apiKey=e217204f2c0d42cca5708d70b60f1fd4&' +
          `pageSize=${this.perPage}&` +
          `page=${this.currentPage}`)
        .then((response) => {
          this.posts = response.data.articles;
        })
        .catch(() => {
          this.emit('on-error');
        });
    },
  },
  filters: {
    formatDate(date) {
      const formatedDate = new Date(Date.parse(date));
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      return formatedDate.toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style lang="sass" scoped>
.attribution
  font-size: 12px
</style>
