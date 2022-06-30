<template>
  <div class="page page-index transition">
    <AppMasthead :image="heroImage"/>
    <AppPostList/>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import AppImageZoom from "@/components/AppImageZoom.vue";
import AppPostList from "@/components/AppPostList.vue";

export default {
  components: {
    AppMasthead,
    AppImageZoom,
    AppPostList
  },
  data() {
    return {
      title: "Home",
      heading: "Nuxt Boilerplate with Headless Wordpress",
      heroImage: "/mountains-masthead.jpg",
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
  .posts{
    padding:calc(2.5vw + 1.5em) 0;
  }
}
.wrapper{
  padding-top:4em;
}
.container {
  width:100%;
  max-width:960px;
  margin:0 auto;
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
a.button {
  display: inline-block;
  font-size: .7rem;
  text-transform: uppercase;
  padding: 15px 15px;
  letter-spacing: 2px;
  position: relative;
  border:1px solid $grey;
  border-radius:.3em;
  &:hover{
    border-color:$white;
  }
  &:active, &:focus{
    border-color:$white;
  }
}
</style>
