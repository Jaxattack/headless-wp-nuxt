<template>
  <div class="page page-contact transition">
    <section class="wrapper">
      <h1>Contact</h1>
      <AppContactForm />  
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
      description: this.description,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'fb:app_id', name: 'fb:app_id', content: 'x' },
        { hid: 'og:url', name: 'og:url', content: this.currentUrl },
        { hid: 'og:image', name: 'og:image', content: this.ogImage }
      ]
    }
  },
  created() {
    let currentUrl = this.$route.path;
  },
  transition: {
    name: "slide",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        scale: 1,
        opacity: 0,
        top: "-100%",
      });
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        top: 0,
        duration: .1,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: "100%",
        duration: .1,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.page-contact {

}
</style>