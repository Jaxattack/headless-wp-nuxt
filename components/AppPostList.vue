<template>
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
.posts{
  main{
    display: flex;
    justify-content:space-between;
    margin-left: -10px;
    margin-right: -10px;
  }
}
</style>