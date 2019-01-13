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
      history.pushState(null, this.$slots.default[0].text, this.href);
      this.$parent.$emit('page-update');
      this.$emit('page-update');
    },
  },
};
</script>

<style scoped>

</style>
