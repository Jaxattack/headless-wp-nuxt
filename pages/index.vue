<template>
  <div class="page page-index transition">
    <app-masthead></app-masthead>
    <section class="posts wrapper">
      <main>
        <div class="post" v-for="post in posts" :key="post.id">
          <nuxt-link :to="`blog/${post.slug}`">
            <client-only>
              <AppImageZoom :src="post.acf.hero_image" :alt="post.acf.client_name" />
            </client-only>
          </nuxt-link>
          <h3>
            <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
          </h3>
          <p>{{ post.acf.description }}</p>
          <a :href="`blog/${post.slug}`" class="button slide">Go To Page</a>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import AppImageZoom from "@/components/AppImageZoom.vue";

export default {
  components: {
    AppMasthead,
    AppImageZoom
  },
  data() {
    return {
      title: "Home",
      description: "Home Page Description",
      ogImage: "",
      currentUrl: "",
      activeClass: "active",
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

<style lang="scss">
* {
  margin:0;
  padding:0;
}
.page {
  margin: 0 auto;
  padding-top: 3vw;
  padding-bottom:3vw;
  min-height:calc(100vh - 3vw);
  background: $white;
}
.page-index {
  padding:0;
  .posts{
    padding:calc(2.5vw + 10px) 0;
  }
}
.wrapper {
  max-width:800px;
  margin:0 auto;
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}
img {
  width:100%;
}
a.button {
  display: inline-block;
  font-size: .7rem;
  text-transform: uppercase;
  padding: 15px 15px;
  letter-spacing: 2px;
  position: relative;
  background:$black;
  color:$white;
}
.posts {
  max-width:95vw;
  margin:0 auto;
  main {
    display: flex;
    flex-direction:row;
    align-self: center;
    justify-content:center;
  }
  .post {
    width: 100%;
    padding: 0 10px;
    color: #444;
    h3 {
      margin-top:1rem;
      margin-bottom: 0rem;
      font-size: 26px;
    }
    p {
      margin:0 0 1rem 0;
    }
  }
}
.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}
</style>
