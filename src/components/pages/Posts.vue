<template>
  <div>
    <div class="row">
      <div v-for="page in pages" :key="page.id" class="col-12 col-md-3">
        <div>
          <v-link :href="'/post/' + page.id">
            <h3>{{page.id}} ) {{page.title}}</h3>
          </v-link>
          <q>{{page.body}}</q>
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
      pages: [],
      currentPage: 1,
      perPage: 12,
      totalRows: 100,
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${this.perPage}`)
        .then((response) => {
          this.pages = response.data;
        });
    },
  },
};
</script>

<style scoped>

</style>
