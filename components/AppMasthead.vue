<template>
  <section class="masthead">
    <client-only>
      <AppImageZoom :src="image" :alt="heading" />
    </client-only>
    <h1>{{ heading }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Masthead',
  props: ['heading','image']
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

section.masthead {
  width: 100%;
  height: 60vh;
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
    height: 60vh;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1;
    object-fit: cover;
    object-position: center;
  }
  h1 {
    color: white;
    margin-bottom:0;
    position:relative;
    z-index:100;
  }
}


</style>