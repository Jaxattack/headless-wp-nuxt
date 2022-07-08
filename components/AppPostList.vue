<template>
  <section class="posts wrapper">
    <main>
      <div class="post" v-for="post in posts" :key="post.id">
        <nuxt-link :to="`blog/${post.slug}`">
          <div class="post-content">
            <client-only>
              <AppImageHover :src="post.acf.hero_image" :alt="post.acf.client_name" />
            </client-only>
            <div class="post-content-copy">
              <h3>
                {{ post.title.rendered }}
              </h3>
              <p>{{ post.acf.description }}</p>
            </div>
            <div class="button" >Go To Page <span>➔</span></div>          
          </div>
        </nuxt-link>
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
  max-width:100%;
  margin:0 auto;
  main{  
    display:  grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
  }
  .post{
    width: 100%;
    margin-bottom:2rem;
    .post-content{
      &:hover{
        img{
          transition: transform 300ms ease;
          transform: scale(1.01);
        }
        .button{
          border-bottom:1px solid $white;
          border-color:$white;
          span{
            color:$white;
            right:2px;
          }
        }
      }
      &:active, &:focus{
        .button{
          border-bottom:1px solid $white;
          border-color:$white;
          right:2px;
        }
      }
      .post-content-copy{
        padding: 1rem 0 1rem 0;
        h3 {
          margin-bottom: 0rem;
        }
        p {
          margin:0;
        }
      }
      .button{
        display: inline-block;
        font-size: .7rem;
        text-transform: uppercase;
        padding: 15px 15px;
        letter-spacing: 2px;
        position: relative;
        padding-left:2px;
        border:1px solid $grey;
        border-top:1px solid $grey;
        border-bottom:0px solid $grey;
        border-left:none;
        border-right:none;
        border-radius:0;
        width:100%;
      }
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