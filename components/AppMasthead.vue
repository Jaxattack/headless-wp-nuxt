<template>
  <section class="masthead">
    <client-only>
      <AppImageZoom :src="image" :alt="heading" />
    </client-only>
    <client-only>
      <AppHeadlineAnimate />
    </client-only>
  </section>
</template>

<script>
import AppHeadlineAnimate from '@/components/AppHeadlineAnimate.vue'

export default {
  name: 'Masthead',
  props: ['heading','image'],
  components: {
    AppHeadlineAnimate
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

section.masthead {
  width: 100%;
  height: calc(100vh - 4rem);
  overflow: hidden;
  position:relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background:$black;
  color: #333;
  picture{
    width: 100%;
    height: calc(100vh - 4rem);
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1;
    object-fit: cover;
    object-position: center;
    border-radius:0;
    opacity:0.3;
  }
  h1 {
    color: white;
    margin-bottom:0;
    position:relative;
    top:-1.25rem;
    z-index:100;
  }
}
</style>