<template>
  <div class="page page-contact transition">
    <section>
      <v-container full>
        <v-row>
          <v-col cols="12">
            <h1>Get in touch</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <div class="contact-details-container">
              <h3>Where to find us</h3>
              <p>123 Thisisour Address street,<br>
              City,<br>
              Country</p>
              <NuxtLink to="/">Phone</NuxtLink>
              <NuxtLink to="/">Email</NuxtLink>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="form-wrapper">
              <div class="form-container">
                <AppContactForm />  
              </div>          
            </div>
          </v-col>
        </v-row>      
      </v-container>
    </section>
  </div>
</template>

<script>
import AppContactForm from "@/components/AppContactForm.vue";

export default {
  data() {
    return {
      title: "Contact",
      description: "Contact Page Description",
      currentUrl: ""
    };
  },
  components: {
    AppContactForm
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
.page-contact {
  padding-top: 8em;
}
</style>