<template>
      <v-row>
        <v-col cols="4" class="post" v-for="post in posts" :key="post.id">
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
        </v-col>
      </v-row>
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
  .post{
    width: 100%;
    margin-bottom:2rem;
    .post-content{
      &:hover{
        img{
          transition: transform 150ms ease-out;
          transform: scale(1);
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
        border-top:1px solid $grey;
        border-bottom:1px solid $grey;
        border-left:none;
        border-right:none;
        border-radius:0;
        width:100%;
      }
    }
  }

</style>