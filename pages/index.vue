<template>
  <div>
    <app-masthead></app-masthead>
    <div class="posts">
      <main>
        <div class="post" v-for="post in posts" :key="post.id">
          <img :src="post.acf.hero_image" alt="post.acf.client_name"/>
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
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  },
  data() {
    return {
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
  },
  methods: {
  }
};
</script>

<style lang="scss">
.posts {
  padding:5vw;
}

main {
  display: flex;
  flex-direction:row;
  align-self: center;
  justify-content:center;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}

img{
  width:100%;
}

a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 15px 20px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}

.post {
  width:25vw;
  margin: 2em;
  padding: 0rem 0rem 0rem 0rem;
  color: #444;
  img{
    margin-bottom:0.5rem;
  }
  h3 {
    margin-bottom: 0rem;
    font-size: 26px;
  }
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>
