<template>
    <nav class="navigation pagination"
         role="navigation">
        <h2 class="screen-reader-text"
            v-html="`Page`" />
        <Paginate v-if="maxPages > 0 && !loading"
                  :active-class="'current'"
                  :break-view-link-class="'dots'"
                  :click-handler="goToPage"
                  :container-class="'nav-links'"
                  :force-page="page"
                  :margin-pages="1"
                  :next-link-class="'page-numbers next'"
                  :next-text="`<span class='screen-reader-text'>Next</span>`"
                  :no-li-surround="true"
                  :page-count="maxPages"
                  :page-link-class="'page-numbers'"
                  :page-range="8"
                  :prev-link-class="'page-numbers prev'"
                  :prev-text="`<span class='screen-reader-text'>Prev</span>`"
                  :value="page" />
    </nav>
</template>

<script type="application/javascript">
    
    import Paginate from "vuejs-paginate";
    import mixins from "../../Util/mixins.js";
    
    export default {
        props: {},
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {},
        computed: {
            loading() {return this.$store.state.loading},
            maxPages() {return this.$store.state.maxPages},
            page() {return this.$store.state.page},
        },
        watch: {},
        components: {Paginate},
        mixins: [mixins],
        name: "Pagination"
    };
</script>

<style scoped>

</style>
