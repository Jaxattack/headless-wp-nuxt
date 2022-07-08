<template>
  <div class="page page-index transition">
    <AppMasthead :image="heroImage"/>
    <AppIntro :heading="introHeading" :copy="introCopy"/>
    <v-container full>
      <v-row>
        <v-col>
          <h3 class="section-head">Featured Posts</h3>
        </v-col>
      </v-row>
    </v-container>
    <AppPostList/>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import AppImageZoom from "@/components/AppImageZoom.vue";
import AppIntro from "@/components/AppIntro.vue";
import AppPostList from "@/components/AppPostList.vue";

export default {
  components: {
    AppMasthead,
    AppImageZoom,
    AppPostList,
    AppIntro
  },
  data() {
    return {
      title: "Home",
      heading: "Nuxt Headless WP",
      heroImage: "/mountains-masthead.jpg",
      introHeading: "A modern front-end boilerplate utilizing the JAMStack and headless Wordpress for blistering fast static websites",
      introCopy: "Lorem ipsum dolor sit amet leuciano deploy faucet havana",
      currentUrl: "",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
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
* {
  margin:0;
  padding:0;
}
html,body{
  background: $black;
}
.page {
  margin: 0 auto;
  padding-top: 4em;
  padding-bottom:4em;
  min-height:calc(100vh - 4em);
  background: $black;
}
.page-index {
  .headline-container{
    h2{
      padding-left:0em;
    }
  }
  .posts{
    &.wrapper{
      padding-top:1rem;
    }
  }
}
.wrapper{
  padding:4em 1.5em 0;

}
.container {
  width:100%;
  max-width:960px;
  margin:0 auto;
  &.full{
    max-width:calc(100% - 3rem);
  }
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: $white;
}
img {
  width:100%;
}
</style>
