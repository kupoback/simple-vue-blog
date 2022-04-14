import Vue from 'vue';
import Vuex from 'vuex';

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        blogApi: null,
        categories: 0,
        filterBar: null,
        loading: false,
        maxPages: 0,
        noResults: null,
        page: 1,
        posts: [],
        readMore: null,
        searchText: '',
        selectedCategory: 0,
        viewport: 'desktop',
    },
    mutations,
    actions,
    getters,
});
