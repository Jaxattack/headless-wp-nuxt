  <template>
    <main class="page page-post-single post transition">
      <div class="feature-image-wrap">
        <img class="feature-image" 
          :src="post.acf.hero_image"
          :alt="post.title.rendered" />      
      </div>
      <section class="page-bottom">
        <v-container full>
          <v-row>
            <v-col class="remove-padding-b">
              <div class="content-container">
                <h1>{{ post.title.rendered }}</h1>
                <p v-html="post.acf.body_copy"></p>
              </div>
              <div class="post-image-container">
                <img class="grid-image" src="/1.jpg" alt=""/>
                <img class="grid-image" src="/2.jpg" alt=""/>
                <img class="grid-image" src="/3.jpg" alt=""/>
                <img class="grid-image last" src="/5.jpg" alt=""/>
              </div>
            </v-col>
            <v-col>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </main>
  </template>

  <script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

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
    methods: {
      animateImageGrid() {
        gsap.utils.toArray(".grid-image").forEach(el => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "top center"
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
    min-height:100vh;
    padding-bottom:0;
    .feature-image-wrap{
      position: absolute;
      right: 0;
      top: 4rem;
      bottom: 0rem;
      object-fit: cover;
      .feature-image{
        position: sticky;
        top: 4rem;
        right: 0;
        width: 50vw;
        height: calc(100vh - 4rem);
        object-fit: cover;
      }
    }
    .content-container{
      max-width:30rem;
      h1{
        margin-bottom:5rem;
      }
      p{
        margin-left:5rem;
      }
    }
    .post-image-container{
      margin-top:5rem;
    }
    .grid-image{
      display:block;
      margin:4px 0 0 0;
      &.last{
        margin-bottom:0;
      }
    } 
    .post-single-content-container{
      margin:0 auto;
      .post-single-body-container{
        max-width:75%;   
      }
    }
  }
  </style>