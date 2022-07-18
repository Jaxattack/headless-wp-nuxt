<template>
  <div class="page page-posts transition">
    <section>
      <v-container full>
        <v-row>
          <v-col>
            <h1>Posts</h1>
          </v-col>
        </v-row>        
      </v-container>
    </section>
    <section class="page-bottom">
      <v-container full>
        <v-row justify="end">
          <v-col>
            <h3 class="section-head">All<span> {{ postCount }}</span></h3>
          </v-col>
        </v-row>
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
      title: "Posts",
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
.page-posts {
  .post-count{
    display:inline-block;
  }
}
</style>
