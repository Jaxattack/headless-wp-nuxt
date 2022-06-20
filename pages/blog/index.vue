<template>
  <div class="page page-posts transition">
    <h1>{{ title }}</h1>
    <div class="posts">
      <main>
        <div class="post" v-for="post in posts" :key="post.id">
          <nuxt-link :to="`blog/${post.slug}`">
            <img :src="post.acf.hero_image" alt="post.acf.client_name"/>
          </nuxt-link>
          <h3>
            <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
          </h3>
          <p>{{ post.acf.description }}</p>
          <a :href="`blog/${post.slug}`" class="readmore slide">Read more</a>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  components: {

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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'fb:app_id', name: 'fb:app_id', content: 'x' },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:image', name: 'og:image', content: this.ogImage }
      ]
    }
  },
  transition: {
    name: "slide",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        scale: 1,
        opacity: 0,
        top: "-100%",
      });
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        top: 0,
        duration: .3,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: "100%",
        duration: .3,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  }
};
</script>

<style lang="scss">
.page-posts {

}


</style>
