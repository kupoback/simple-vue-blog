/**
 * A file that contains most of the Vue Components and logic
 */
import Vue from 'vue';
import { MediaQueries } from 'vue-media-queries';

import { store } from './Vuex/store.js';
import mixins from './Util/mixins.js';

window.Vue = Vue;
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);

Vue.config.productionTip = false;

const vueLoadingElm = document.querySelectorAll('[class^="vue-loading"]');

const navigationElm = document.getElementById('vue-navigation-container');
const vuePagination = document.getElementById('blog-pagination');

const blogFilterElm = document.getElementById('blog-post-filter');
const blogListElm = document.getElementById('blog-post-list');

const VueInstance = new Vue({
    store,
    mediaQueries: mediaQueries,
    created() {
        if (typeof NAV !== 'undefined' && navigationElm !== null) {
            this.$store.dispatch('getNavigation', {
                mainNav: NAV.mainNav,
                utilityNav: NAV.utilityNav,
            });
        }

        const vp = this.$mq.above(1059) ? 'desktop' : 'mobile';
        this.$store.commit('checkViewport', vp);

        window.addEventListener('resize', () => {
            const vp = this.$mq.above(1059) ? 'desktop' : 'mobile';
            if (vp !== this.viewport) {
                this.$store.commit('checkViewport', vp);
            }
        });
        
        if (typeof BLOG !== 'undefined') {
            this.$store.commit('objStateParse', BLOG);
        }
    },
    computed: {
        viewport() {
            return this.$store.state.viewport;
        },
    },
    mixins: [mixins],
});

/**
 * The Navigation
 */
if (navigationElm !== null) {
    const navigationContainer = Vue.component(
        'NavigationContainer',
        require('./Components/Navigation.vue').default
    );
    const navigationElm = new Vue({
        el: '#vue-navigation-container',
        mediaQueries: mediaQueries,
        store,
        render: (h) => h(navigationContainer),
    });
}

if (blogFilterElm) {
    const blogFilterComponent = Vue.component('FilterBar', require('./Components/Blog/FilterBar.vue').default);
    const blogFilterMount = new Vue({
        el: "#blog-post-filter",
        store,
        render: (h) => h(blogFilterComponent)
    })
}

if (blogListElm) {
    const blogListComponent = Vue.component('BlogList', require('./Components/Blog/PostListing.vue').default);
    const blogListMount = new Vue({
        el: "#blog-post-list",
        store,
        render: h => h(blogListComponent)
    })
}

if (vuePagination) {
    const paginationComponent = Vue.component('BlogPagination', require('./Components/Blocks/Pagination.vue').default);
    const paginationMount = new Vue({
        el: '#blog-pagination',
        store,
        render: h => h(paginationComponent)
    })
}

if (vueLoadingElm.length) {
    const loadingComponent = Vue.component('Loading', require('./Components/Blocks/Loading.vue').default);
    vueLoadingElm.forEach(elm => {
        const loadingMount = new Vue({
            el: document.getElementById(elm.id),
            store,
            render: h => h(loadingComponent)
        })
    })
}
