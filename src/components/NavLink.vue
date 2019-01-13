<template>
  <a :href="href"
     @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['href'],
  methods: {
    go(e) {
      e.preventDefault();

      history.pushState({ dataCurrentPage: this.$parent.dataCurrentPage ||
          this.$parent.$parent.dataCurrentPage },
      this.$slots.default[0].text, this.href);

      /* eslint-disable no-console */
      console.log(this.$parent.dataCurrentPage ||
      this.$parent.$parent.dataCurrentPage);

      this.$parent.$emit('page-update');
      this.$emit('page-update');
    },
  },
};
</script>

<style scoped>

</style>
