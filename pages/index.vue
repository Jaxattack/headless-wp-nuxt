<template>
  <div class="page page-index transition">
    <div class="circle-absolute-p">
      <div class="circle-absolute-p-inner"></div>
    </div>
    <section>
      <v-container full>
        <v-row>
          <v-col>
            <h1>A blistering fast modern front-end boilerplate <br>built on the JAMStack+<a :href="features[index].url">{{ features[index].name }}</a></h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container full>
        <v-row>
          <v-col>
            <h3 class="section-head">Latest Posts<NuxtLink to="/blog">See all</NuxtLink></h3>
          </v-col>
        </v-row>
        <AppPostList/>
      </v-container>
    </section>
    <section class="page-bottom">
      <v-container full>
        <v-row>
          <v-col>
            <h1>Nuxt+Wordpress</h1>
          </v-col>
          <v-col cols="8">
            <h2 class="indent">JAMStack is an architecture designed to make the web faster, more secure, and easier to scale. The core principles of pre-rendering and decoupling enable JAMStack websites and applications to be delivered with greater speed, confidence and resilience than ever before.</h2>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import AppImageZoom from "@/components/AppImageZoom.vue";
import Intro from "@/components/AppIntro.vue";
import AppPostList from "@/components/AppPostList.vue";

export default {
  components: {
    AppMasthead,
    AppImageZoom,
    AppPostList,
    Intro
  },
  data() {
    return {
      currentUrl: "",
      title: "JAMStack+",
      heading: "JAMStack+",
      heroImage: "/mountains-masthead.jpg",
      heroDependencies: "",
      introHeading: "A modern front-end boilerplate built on Nuxt and headless Wordpress for blistering fast, SEO-optimized websites",
      introCopy: "Lorem ipsum dolor sit amet leuciano deploy faucet havana",
      index: 0,
      features: [
        {name:"Nuxt",url:"https://nuxtjs.org/"},
        {name:"VueJS",url:"https://vuejs.org/"},
        {name:"SASS",url:"https://sass-lang.com/"},
        {name:"Greensock AP",url:"https://greensock.com/"},
        {name:"Vuetify Grid",url:"https://vuetifyjs.com/en/components/grids/"},
        {name:"Adobe Fonts",url:"https://fonts.adobe.com"},
        {name:"Wordpress CMS",url:"https://wordpress.com/"},
        {name:"Netlify Auto Deploy",url:"https://www.netlify.com/"}
      ]
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    animateOnScroll() {
      gsap.to(".container", { // Animate selector
        // Whatever properties are animated

        y:300,
        scrollTrigger: {
          trigger: ".container", // make .panel2 the trigger
          start: "20% bottom", // 10% of .panel2 enters the bottom of the viewport\
        }
      });
    },
    updateFeatures () {
      setTimeout(() => {
        this.index += 1;
        if (this.index >= this.features.length) {
          this.index = 0;
        }   
        this.updateFeatures()
      }, 1500);
    },
  },
  created() {
    this.$store.dispatch("getPosts");
    let currentUrl = this.$route.path;
  },
  mounted() {
    this.updateFeatures();
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
  padding-top: 6em;
  padding-bottom:4em;
  min-height:calc(100vh - 4em);
  background: $black;
}
.page-index {
  h1{
    margin-bottom:0;
  }
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
}
section{
  padding-bottom:7rem;
  &.page-bottom{
    padding-bottom:0rem;
  }
}
.container {
  max-width:1200px;
  margin:0 auto;
  &.full{
    max-width:calc(100% - 24px);
  }
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: $white;
  text-decoration-color:$grey;
}
img {
  width:100%;
}
</style>
