<template>
  <main class="page page-post-single post transition">
    <div class="wrapper">
      <div class="container">
        <div class="post-single-content-container">
          <h1>{{ post.title.rendered }}</h1>
        </div>

        <client-only>
          <AppImageZoom :src="post.acf.hero_image" :alt="post.title.rendered" />
        </client-only>
        
        <div class="post-single-content-container">
          <h3>{{ post.acf.description }}</h3>
          <p>{{ post.acf.body_copy }}</p>
        </div>        
      </div>
    </div>
  </main>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";  
import AppImageZoom from "@/components/AppImageZoom.vue";

export default {
  components: {
    AppImageZoom,
    AppMasthead
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  created() {
    this.$store.dispatch("getPosts");
    let currentUrl = this.$route.path;
  },
  head() {
    return {
      title: this.post.title.rendered,
      meta: [
        // hid is used as unique identifier
        // Facebook OG Tags
        { hid: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.post.acf.description },
        { hid: 'og:image', name: 'og:image', content: this.post.acf.hero_image },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: this.summary },
        { hid: 'twitter:url', name: 'twitter:url', content: this.currentUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.acf.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.post.acf.hero_image },
        // Search Engine Meta
        { hid: 'description', name: 'description', content: this.post.acf.description }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.page-post-single {
  picture{
    margin-bottom:2em;
  }
  .post-single-content-container{
    max-width:75%;
    margin:0 auto;
  }
}
</style>