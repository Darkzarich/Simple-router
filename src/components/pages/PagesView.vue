<template>
  <div>
    <div class="row">
      <div v-for="page in pages" :key="page.id" class="col-12 col-md-3">
        <div>
          <h3>{{page.id}} ) {{page.title}}</h3>
          <q>{{page.body}}</q>
          <hr>
        </div>
      </div>
    </div>
    <div class="row">
      <b-pagination class="col-12" align="center" size="md" :total-rows="totalRows"
                    @input="getPages" v-model="currentPage" :per-page="perPage">
      </b-pagination>
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
      currentPage: 1,
      perPage: 12,
      totalRows: 100,
    };
  },
  created() {
    this.getPages();
  },
  methods: {
    getPages() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${this.perPage}`)
        .then((response) => {
          this.pages = response.data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
