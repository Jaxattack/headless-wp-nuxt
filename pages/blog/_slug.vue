<template>
  <main class="page page-post-single post transition">
    <div class="wrapper">
      <div class="container">
        
        <h1>{{ post.title.rendered }}</h1>

        <client-only>
          <AppImageZoom :src="post.acf.hero_image" :alt="post.title.rendered" />
        </client-only>
        
        <h3>{{ post.acf.description }}</h3>
        <p>{{ post.acf.body_copy }}</p>        
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
  },
  transition: {
    name: "slide",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        top: "-100%",
      });
    },
    enter(el, done) {
      this.$gsap.to(el, {
        scale: 1,
        opacity: 1,
        top: 0,
        duration: .2,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: "100%",
        duration: .2,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.page-post-single {
  picture{
    margin-bottom:2em;
  }
}
</style>