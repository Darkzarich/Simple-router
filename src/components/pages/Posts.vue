<template>
  <div>
    <div class="row">
      <div v-for="post in posts" :key="post.url" class="col-12 col-md-3">
        <div>
          <v-link :href="'/post/' + post.title">
            <img class="img-fluid" :src="post.urlToImage">
            <h5>{{post.title}}</h5>
          </v-link>
          <q>{{post.description}}</q>
          <hr>
          {{post.publishedAt | formatDate}}
          <hr>
        </div>
      </div>
    </div>
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPosts" v-model="currentPage" :per-page="perPage">
      </b-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavLink from '../NavLink';

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

<style scoped>

</style>
