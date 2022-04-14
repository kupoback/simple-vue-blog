<template>
    <li :class="`search__results__list-item ${objNotEmpty(image) ? 'with-image' : ''}`">
        <div class="search__results__list-txt">
            <h2 class="hdr-md"
                v-html="title"/>
            <p v-if="excerpt"
               class="body"
               v-html="excerpt" />
            <a :href="permalink"
               class="cta"
               v-html="readMore" />
        </div>
        <div v-if="objNotEmpty(image)"
             class="search__results__list-img">
            <PostImage :image="image" />
        </div>
    </li>
</template>

<script type="application/javascript">
    import PostImage from "./PostImage.vue";
    
    import mixins from "../../Util/mixins.js";

    export default {
        props: {
            excerpt: [String],
            image: [Array, Object],
            permalink: [String],
            title: [String],
        },
        data: () => ({}),
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
        },
        computed: {
            readMore() {return this.$store.state.readMore},
        },
        watch: {},
        components: {PostImage},
        mixins: [mixins],
        name: "Post"
    };
</script>

<style scoped>

</style>
