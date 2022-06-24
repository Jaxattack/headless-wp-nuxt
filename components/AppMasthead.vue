<template>
  <section class="masthead">
    <client-only>
      <AppImageZoom src="/mountains-masthead.jpg" alt="Masthead" />
    </client-only>
    <h1>{{ tagline }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: "Nuxt Boilerplate with Headless Wordpress"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

section.masthead {
  width: 100%;
  height: 66.6vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7vw;
  color: #333;
  picture{
    width: 100%;
    height: 66.6vh;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    object-fit: cover;
  }
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 30px, 65px);
  }
}


</style>