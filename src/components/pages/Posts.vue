<template>
  <div class="mx-2">
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPosts" v-model="currentPage" :per-page="perPage">
      </b-pagination>
    </div>
    <div class="row">
      <div v-if="isLoading" class="text-center col-12 m-3 loading">It's loading</div>
      <div v-else v-for="post in posts" :key="post.web_url" class="col-12 col-md-3 mb-3">
        <div class="card h-100">
          <v-link :href="'/post/' + post.headline.main">
            <img class="card-img-top" :src="getImageSrc(post)">
          </v-link>
          <div class="card-body">
            <v-link :href="'/post/' + post.headline.main">
              <h5 class="card-title">{{post.headline.main}}</h5>
            </v-link>
            <p class="card-text">
              {{post.abstract}}
            </p>
          </div>
          <div class="card-footer">
            {{post.pub_date | formatDate}}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPosts" v-model="currentPage" :per-page="perPage">
      </b-pagination>
      <br>
      <span class="attribution col-12 text-center">API for news powered by <a href="https://developer.nytimes.com/">developer.nytimes.com</a></span>
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
      isLoading: true,
    };
  },
  created() {
    const currentDate = new Date();

    axios
      .get(`https://api.nytimes.com/svc/archive/v1/
        ${currentDate.getFullYear}/${currentDate.getMonth() + 1}.json?api-key=n0YNVbv80LUtv4UTIDznP0um0hLQeO4z`)
      .then((res) => {
        this.totalRows = Math.floor(res.response.docs.length / this.perPage);
        this.posts = res.response.docs;
        this.isLoading = false;
      })
      .catch(() => {
        this.emit('on-error');
      });
  },
  methods: {
    getImageSrc(post) {
      const thumbnail = post.multimedia.find(m => m.subtype === 'thumbLarge');
      return thumbnail ? `https://www.nytimes.com/${thumbnail.url}` : config.noImgURL;
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

  .loading:after
    display: inline
    content: ''
    animation: loading 0.5s linear 0s infinite

  @keyframes loading
    0%
      content: '.'
    50%
      content: '..'
    100%
      content: '...'

</style>
