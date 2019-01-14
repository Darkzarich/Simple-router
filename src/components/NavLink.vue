<template>
  <a :href="this.baseURL + href"
     @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
import config from '../config';

export default {
  name: 'NavLink',
  props: ['href'],
  data() {
    return {
      baseURL: config.baseURL,
    };
  },
  methods: {
    go(e) {
      e.preventDefault();
      history.pushState(null, this.$slots.default[0].text, this.baseURL + this.href);
      this.$parent.$emit('page-update');
      this.$emit('page-update');
    },
  },
};
</script>

<style scoped>

</style>
