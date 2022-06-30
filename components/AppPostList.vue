<template>
  <section class="posts wrapper">
    <main>
      <div class="post" v-for="post in posts" :key="post.id">
        <nuxt-link :to="`blog/${post.slug}`">
          <client-only>
            <AppImageHover :src="post.acf.hero_image" :alt="post.acf.client_name" />
          </client-only>
        </nuxt-link>
        <h3>
          <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
        </h3>
        <p>{{ post.acf.description }}</p>
        <a class="button" :href="`blog/${post.slug}`">Go To Page</a>
      </div>
    </main>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: "Home",
        description: "Home Page Description",
        ogImage: "",
        currentUrl: "",
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
  }
</script>

<style lang="scss">
.posts {
  max-width:98rem;
  margin:0 auto;
  main {  
    display:  grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .post {
    width: 100%;
    padding: 0 0.5em;
    margin-bottom:3rem;
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

@media screen and (max-width:1400px) {
  .posts{
    main{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media screen and (max-width:1100px) {
  .posts{
    main{
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media screen and (max-width:960px) {
  .posts{
    main{
      grid-template-columns: 1fr;
    }
  }
}
</style>