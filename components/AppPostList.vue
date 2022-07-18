<template>
      <v-row>
        <v-col cols="4" class="post scroll-fade" v-for="post in latestPosts" :key="post.id">
          <nuxt-link class="post-link" :to="`blog/${post.slug}`">
            <div class="post-content">
              <client-only>
                <AppImageHover :src="post.acf.hero_image" :alt="post.acf.client_name" />
              </client-only>
              <div class="post-content-copy">
                <h3>
                  {{ post.title.rendered }}
                </h3>
              </div>
              <div class="button" >Read More <span>&#10132;</span></div>          
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
</template>

<script>
  export default {
    props: {
      limit: {
        default : {},
        type : String
      }
    },
    data() {
      return {
        title: "Home",
        description: "Home Page Description",
        ogImage: "",
        currentUrl: "",
      };
    },
    computed: {
      latestPosts(){
        return this.$store.state.posts.slice(0, this.limit)
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
    .post-content{
      &:hover{
        .button{
            color:$highlight;
          span{
            color:$highlight;
            right:2px;
          }
        }
      }
      &:active, &:focus{
        .button{
          right:2px;
        }
      }
      .post-content-copy{
        padding: 1rem 0 0 0;
        h3 {
          margin-bottom: 0rem;
        }
        p {
          margin:0;
          text-indent:0;
        }
      }
      .button{
        display: inline-block;
        font-size: .7rem;
        text-transform: uppercase;
        padding: 0px 15px 15px;
        letter-spacing: 2px;
        position: relative;
        padding-left:2px;
        border-top:0;
        border-bottom:1px solid $grey;
        border-left:none;
        border-right:none;
        border-radius:0;
        width:100%;
      }
    }
  }
</style>