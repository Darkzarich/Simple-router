<template>
  <div>
    <div class="row" v-if="post">
      <div class="col-12 col-md-6">
        <div>
          <img class="img-fluid" :src="post.image">
          <h2>
            {{post.title}}
          </h2>
          <hr>
          <div class="ml-3">
            {{post.description}}
            <br><div class="mt-2">Source: <a :href="post.url">{{post.source}}</a></div>
            <div>
              <button type="button" onclick="history.back()" class="btn btn-primary btn-sm">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  created() {
    const foundPost = this.$store.getters.getPostByName(
      decodeURI(window.location.pathname.replace(`${config.baseURL}/post/`, '')),
    );

    if (foundPost) {
      this.post = foundPost;
    } else {
      this.$emit('on-error');
    }
  },
};
</script>

<style lang="sass" scoped>
  .explanation
    color: var(--blue)
</style>
