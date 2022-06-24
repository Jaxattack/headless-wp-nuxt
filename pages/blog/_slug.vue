<template>
  <main class="page page-post-single post transition">
    <h1>{{ post.title.rendered }}</h1>

    <client-only>
      <AppImageZoom :src="post.acf.hero_image" :alt="post.title.rendered" />
    </client-only>
    
    <p>{{ post.acf.description }}</p>
    <p>{{ post.acf.body_copy }}</p>
  </main>
</template>

<script>
import AppImageZoom from "@/components/AppImageZoom.vue";

export default {
  components: {
    AppImageZoom
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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', name: 'og:title', content: this.post.title },
        { hid: 'description', name: 'description', content: this.post.acf.description },
        { hid: 'fb:app_id', name: 'fb:app_id', content: 'x' },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:image', name: 'og:image', content: this.post.acf.hero_image }
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
        duration: .1,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: "100%",
        duration: .1,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.page-post-single {
  max-width: 800px;
}
</style>