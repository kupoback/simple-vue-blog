<template>
    <div :class="containerClass">
        <p :class="paragraphClass"
           v-html="noResultsText" />
    </div>
</template>

<script type="application/javascript">
    export default {
        props: {
            containerClass: {
                type: String,
                default: ""
            },
            paragraphClass: {
                type: String,
                default: "",
            },
        },
        computed: {
            noResultsText() {return this.$store.state.noResults;},
        },
        name: "NoResults"
    };
</script>

<style scoped>

</style>
