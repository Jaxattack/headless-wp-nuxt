<template>
  <div class="page page-about transition">
    <section class="about-hero">
      <v-container full>
        <v-row>
          <v-col cols="9">
            <h1>{{ description }}</h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container full>
        <v-row>
          <v-col cols="6">
          </v-col>
          <v-col>
            <h3>Boilerplate Features</h3>
            <ul>
                <li class="list-item" v-for="listItem in listItems">
                  <v-row>
                    <v-col cols="6">
                      <p class="no-indent">{{ listItem.name }}</p>
                    </v-col>
                    <v-col>
                      <p class="no-indent">{{ listItem.copy }}</p>
                    </v-col>
                  </v-row>
                </li>
            </ul>     
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="about-benefits">
      <v-container>
        <v-row>
          <v-col>
              <h4 class="section-head">Faster performance</h4>
              <p class="no-indent">Serve pre-built markup and assets over a CDN.</p>
            </v-col>  
            <v-col>
              <h4 class="section-head">More secure</h4>
              <p class="no-indent">No need to worry about server or database vulnerabilities.</p>
            </v-col>
            <v-col>
              <h4 class="section-head">Less expensive</h4>
              <p class="no-indent">Hosting of static files is cheap or even free.</p>
            </v-col>  
        </v-row>
      </v-container>
    </section>
    <section class="image-grid">
      <v-container full>
        <v-row no-gutters>
          <v-col>
            <img class="grid-image" src="/1.jpg" alt="">
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="about-benefits">
      <v-container>
        <v-row>
          <v-col cols="6">
            <h2 class="sticky">All of the benefits of modern JavaScript development, with the client-facing familiarity of the Wordpress CMS</h2>
          </v-col>
          <v-col cols="2">
          </v-col>
          <v-col>
            <h4 class="section-head">Pre-rendering</h4>
            <p>With Jamstack, the entire front end is prebuilt into highly optimized static pages and assets during a build process. This process of pre-rendering results in sites which can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.</p>
            <p>With so many popular tools for generating sites, like Gatsby, Hugo, Jekyll, Eleventy, NextJS, and very many more, many web developers are already familiar with the tools needed to become productive Jamstack developers.</p>
            <h4 class="section-head">Enhancing with JavaScript</h4>
            <p>With the markup and other user interface assets of Jamstack sites served directly from a CDN, they can be delivered very quickly and securely. On this foundation, Jamstack sites can use JavaScript and APIs to talk to backend services, allowing experiences to be enhanced and personalized.</p>
            <h4 class="section-head">Supercharging with services</h4>
            <p>The thriving API economy has become a significant enabler for Jamstack sites. The ability to leverage domain experts who offer their products and service via APIs has allowed teams to build far more complex applications than if they were to take on the risk and burden of such capabilities themselves. Now we can outsource things like authentication and identity, payments, content management, data services, search, and much more.</p>
            <p>Jamstack sites might utilise such services at build time, and also at run time directly from the browser via JavaScript. And the clean decoupling of these services allows for greater portability and flexibility, as well as significantly reduced risk.</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="page-bottom image-grid">
      <v-container full>
        <v-row no-gutters>
          <v-col>
            <img class="grid-image" src="/4.jpg" alt="">
          </v-col>
          <v-col>
            <img class="grid-image" src="/6.jpg" alt="">
          </v-col>
          <v-col>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <img class="grid-image" src="/3.jpg" alt="">
          </v-col>
          <v-col>
          </v-col>
          <v-col>
            <img class="grid-image" src="/5.jpg" alt="">
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  data() {
    return {
      title: "About Jamstack",
      description: "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup",
      currentUrl: "",
      listItems: [
        {name: "Nuxt", copy: "VueJS Static Site Generation Framework"},
        {name: "SASS", copy: "CSS Preprocessor and Minifier"},
        {name: "Greensock Animation Plugin", copy: "JavaScript Animation Engine"},
        {name: "Vuetify Grid", copy: "CSS Flexbox Grid Framework"},
        {name: "Adobe Fonts", copy: "Adobe Typeface Library"},
        {name: "Headless Wordpress CMS", copy: "Wordpress Content Management"},
        {name: "Netlify Atomic Deploys", copy: "Automatic Deploys on Git Commit"},
        {name: "Social Metas", copy: "Meta Tag Management for SEO"}
      ]
    };
  },
  methods: {
    animateImageGrid() {
      gsap.utils.toArray(".grid-image").forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "top 80%",
            end: "bottom 80%"
          },
          scale: .6,
          transformOrigin: "center center", 
          ease: "none"
        });
      });
    }
  },
  mounted() {
    ScrollTrigger.refresh();
    this.animateImageGrid();
  },
  beforeDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
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
  },
  created() {
    let currentUrl = this.$route.path;
  }
};
</script>

<style lang="scss" scoped>
.page-about {
  .about-hero,
  .about-benefits{
  }
  h2.sticky{
    top:9rem;
    position:sticky;
  }
  h3{
    margin-bottom:1em;
  }
  .text-columns-2{
    column-count: 2;
    column-gap:3rem;
  }
}
</style>