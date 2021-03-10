import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    totalRows: 0,
    page: 0,
    loading: false,
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setTotalRows(state, count) {
      state.totalRows = count;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
  },
  getters: {
    postsByPage(state) {
      return state.posts
        .slice(config.perPage * (state.page - 1),
          (config.perPage * (state.page - 1)) + config.perPage);
    },
    getPostByName(state) {
      return name => state.posts.find(post => post.title === name);
    },
  },
  actions: {
    async getPosts({ commit }) {
      commit('setLoading', true);

      axios
        .get('http://api.mediastack.com/v1/news?access_key=be3480196e887af35f4f910616dc1bde&countries=us&limit=100')
        .then((res) => {
          commit('setTotalRows', res.data.data.length);
          commit('setPosts', res.data.data);
          commit('setLoading', false);
        });
    },
  },
});
