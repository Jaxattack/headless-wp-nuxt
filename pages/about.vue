<template>
  <div class="page page-about transition">
    <section>
      <v-container full>
          <v-row>
            <v-col cols="12">
              <h1>About</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="8">
              <div class="text-columns-2">
                <p>Lorem ipsum dolor sit amet, numquam principes vel no, usu eu agam natum intellegam, molestie dissentiunt vim et. Vis duis persecuti efficiendi ea. Ea duo mundi voluptatum, pro eu elitr nostrud, ex congue putant nec. Sed ornatus disputando deterruisset ex.</p>
                <p>Mel molestie inimicus accusamus in, cu mei nonumes vulputate, qui cu essent praesent. Tale sonet persius nec cu, id per solum rebum albucius. Et his dico inimicus, habeo delenit ad has. Quo ex augue suscipit vituperatoribus, an mea feugait mediocritatem, no ferri paulo eos. Brute referrentur intellegebat ad mei, omnes molestie deseruisse sed id. Ex agam phaedrum aliquando quo, impetus atomorum ne has. Ius et placerat interesset neglegentur, primis aeterno cu usu, pro ut soluta omittam.</p>
                <p>Ea invenire tincidunt vis, an aeque maiorum euripidis mel. Hinc convenire ei quo. Cu pro erant alienum corpora, vis te facer molestie. Ex wisi probatus nec, ea fugit nullam laoreet usu, vim ut sint quaeque molestie. Sint paulo omnium pri id. Est amet omnes maluisset at, at qui illum vituperata, duo ad quem adipiscing.</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "About",
      description: "About Page Description",
      currentUrl: ""
    };
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
  padding-top: 8em;
  .text-columns-2{
    column-count: 2;
    column-gap:3rem;
  }
}
</style>