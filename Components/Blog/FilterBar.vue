<template>
    <div class="blog__feed__filter fade">
        <button v-if="objHasKey(filterBar, 'title')"
                class="blog__feed__filter-all link active"
                v-html="filterBar.title" />
        
        <div class="blog__feed__filter-select">
            <label v-if="objHasKey(filterBar, 'filter_by_title')"
                   for="filter-items"
                   class="link"
                   v-html="filterBar.filter_by_title" />
            <select v-model="category"
                    :disabled="loading"
                    id="filter-items">
                <option v-for="({id, name, slug}) in categories"
                        :key="id"
                        :value="id"
                        :selected="id === 0 && true"
                        v-html="name" />
            </select>
        </div>
        
        <div class="blog__feed__filter-search">
            <form role="search" class="search">
                <label for="blog-search"
                       class="screen-reader-text"
                       v-html="`Search`" />
                <input v-model="searchValue"
                       id="blog-search"
                       :placeholder="filterBar.search_placeholder"
                       type="search"
                       @keypress.enter.prevent="search" />
                <button class="search-btn"
                        @submit.prevent="search"
                        @keypress.enter.prevent="search">
                    <img :src="searchIcon"
                         alt="search icon"
                         class="search-btn__img" />
                </button>
            </form>
        </div>
    </div>
</template>

<script type="application/javascript">
    import mixins from "../../Util/mixins.js";

    export default {
        props: {},
        data: () => ({
            category: 0,
            searchValue: '',
        }),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            search() {
                this.commitObject({searchText: this.searchValue});
                this.getPosts();
            }
        },
        computed: {
            categories() {return this.$store.state.categories},
            filterBar() {return this.$store.state.filterBar},
            loading() {return this.$store.state.loading},
            searchIcon() {
                return this.objHasKey(this.$store.state.navIcons, 'search')
                    && this.$store.state.navIcons.search;
            }
        },
        watch: {
            category(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.commitObject({selectedCategory: newVal})
                    this.getPosts();
                }
            },
        },
        components: {},
        mixins: [mixins],
        name: "FilterBar"
    };
</script>

<style lang="scss" scoped>
    @import "./resources/assets/styles/common/_variables";
    
    option {
        color: $rainstorm;
    }
</style>
