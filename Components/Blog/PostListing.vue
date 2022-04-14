<template>
    <ul id="blog-listing"
        :class="`blog__feed__posts  ${loading ? 'loading-posts' : ''}`">
        <Post v-if="posts.length && !loading"
              v-for="({excerpt, id, image, permalink, title}) in posts"
              :key="id"
              :excerpt="excerpt"
              :image="image"
              :permalink="permalink"
              :title="title"
              />
        <NoResults v-else-if="!posts.length && !loading" />
    </ul>
</template>

<script type="application/javascript">
    /**
     * Vue Scripts
     */
    import axios from "axios";

    /**
     * Vue Components
     */
    import NoResults from "../Blocks/NoResults.vue";
    import Post from "../Blocks/Post.vue";
    import mixins from "../../Util/mixins.js";
    
    export default {
        props: {},
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {
            this.getPosts();
        },
        mounted() {},
        methods: {},
        computed: {
            loading() {return this.$store.state.loading},
            posts() {return this.$store.state.posts},
        },
        watch: {},
        components: {NoResults, Post},
        mixins: [mixins],
        name: "PostListing"
    };
</script>

<style scoped>

</style>
