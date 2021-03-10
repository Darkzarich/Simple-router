<template>
  <div class="mx-2">
    <div class="row">
      <b-pagination
        class="col-12"
        align="center"
        size="md"
        :total-rows="totalRows"
        v-model="page"
        :per-page="perPage"
      >
      </b-pagination>
    </div>
    <div class="row">
      <div v-if="loading" class="text-center col-12 m-3 loading">It's loading</div>
      <div v-else v-for="(post, index) in postsByPage" :key="index" class="col-12 col-md-3 mb-3">
        <div class="card h-100">
          <v-link :href="'/post/' + post.title">
            <img class="card-img-top" :src="getImageSrc(post)">
          </v-link>
          <div class="card-body">
            <v-link :href="'/post/' + post.title">
              <h5 class="card-title">{{post.title}}</h5>
            </v-link>
            <p class="card-text">
              {{post.description.slice(0, 60) + '...'}}
            </p>
          </div>
          <div class="card-footer">
            {{post.published_at | formatDate}}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    v-model="page" :per-page="perPage">
      </b-pagination>
      <br>
      <span class="attribution col-12 text-center">API for news powered by <a href="https://developer.nytimes.com/">developer.nytimes.com</a></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import NavLink from '../NavLink';
import config from '../../config';

export default {
  name: 'Posts',
  components: {
    'v-link': NavLink,
  },
  data() {
    return {
      perPage: config.perPage,
    };
  },
  computed: {
    ...mapState(['loading', 'totalRows']),
    ...mapGetters(['postsByPage']),
    page: {
      set(val) {
        this.$store.commit('setPage', val);
      },
      get() {
        return this.$store.state.page;
      },
    },
  },
  methods: {
    getImageSrc(post) {
      return post.image ? post.image : config.noImgURL;
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
