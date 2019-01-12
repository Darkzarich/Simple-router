<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div>
          <h2>{{post.id}} ) {{post.title}}</h2>
          <hr>
          <div class="ml-3">{{post.body}}</div>
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
    axios
      .get(window.location.pathname.toLowerCase().replace(
        /\/post\/([0-9a-zA-Z]+)/,
        'https://jsonplaceholder.typicode.com/posts/$1'))
      .then((response) => {
        this.post = response.data;
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
