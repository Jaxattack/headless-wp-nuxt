<template>
  <div class="page page-posts transition">
    <section class="page-bottom">
      <v-container full>
        <AppPostList limit="6"/>
      </v-container>
    </section>
  </div>
</template>

<script>
import AppImageZoom from "@/components/AppImageZoom.vue";

export default {
  components: {
    AppImageZoom
  },
  data() {
    return {
      title: "All Posts",
      description: "Posts List Page Description",
      currentUrl: "",
      activeClass: "active"
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    postCount() {
      return this.$store.state.posts.length;
    }
  },
  created() {
    this.$store.dispatch("getPosts");
    let currentUrl = this.$route.path;
  },
  head() {
    return {
      title: this.title,
      meta: [
        // Facebook OG Tags
        { hid: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:image', name: 'og:image', content: this.ogImage },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: this.summary },
        { hid: 'twitter:url', name: 'twitter:url', content: this.currentUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.ogImage },
        // Search Engine Meta
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
};
</script>

<style lang="scss">
  .page{
    &.page-posts {
      padding-top: 4.8em;
      .post-count{
        display:inline-block;
      }
      .content-container{
        h1{
          margin-bottom:5rem;
        }
        p{
          max-width:40rem;
        }
      }
    }
  }

</style>
