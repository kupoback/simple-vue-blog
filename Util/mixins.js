import axios from "axios";

export default {
    methods: {
        /**
         * Checks if the Object is fully empty
         * @param {object} obj
         * @returns {number}
         */
        objNotEmpty(obj) {
            return Object.keys(obj).length;
        },
        /**
         * Handy method to check if the object has a property
         *
         * @param {object} obj
         * @param {string} key
         * @returns {boolean}
         */
        objHasKey(obj, key) {
            return obj.hasOwnProperty(key);
        },
        //region Blog Methods
        /**
         * This method takes the page selected by the user and updates
         * the state for that, and grabs the next page of posts. It'll
         * also call to the function to scroll the user to the top of
         * the listing
         *
         * @param {int} pageNum
         */
        goToPage(pageNum) {
            this.commitObject({page:pageNum})
            this.blogScrollEvent();
            this.getPosts();
        },
        /**
         * This method is our API call to grab a list of
         * blog posts using the values store in Vuex
         */
        getPosts() {
            const params = {};
            if (this.selectedCategory > 0) params.category = this.selectedCategory;
            if (this.searchText) params.s = this.searchText;
            
            this.setLoading(true)
            axios
                .get(`${this.api}/${this.page}`, {params})
                .then(({data, status}) => status === 200 && this.commitObject({posts: data.posts, maxPages: data.maxPages,}))
                .catch(err => console.error(err))
                .finally(() => this.setLoading(false));
        },
        /**
         * This simple method reduces the amount of
         * times needed to type this.$store.commit
         * @param {object} obj
         */
        commitObject(obj) {
            this.$store.commit('objStateParse', obj);
        },
        /**
         * Quick call to update the loading bool
         * @param {boolean} loading
         */
        setLoading(loading) {
            this.$store.commit('objStateParse', {loading})
        },
        /**
         * This is generally called to when the user clicks the pagination
         */
        blogScrollEvent() {
            const resultsElm = $('#blog-listing');
            let offsetAmount = window.matchMedia('(min-width: 1060)') ? 175 : 75;
            if (event !== undefined && event.currentTarget.classList.contains("page-numbers") && resultsElm) {
                $("html, body").animate({
                    scrollTop: resultsElm.offset().top - offsetAmount
                }, 1000);
            }
        }
        //endregion
    },
    computed: {
        api() {return this.$store.state.blogApi},
        page() {return this.$store.state.page},
        searchText() {return this.$store.state.searchText},
        selectedCategory() {return this.$store.state.selectedCategory},
    }
};
