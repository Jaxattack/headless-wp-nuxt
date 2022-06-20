<template>
  <nav class="nav">
    <div class="nav-logo">
      <nuxt-link exact to="/">
        <app-icon></app-icon>
      </nuxt-link>
    </div>
    
    <ul class="nav-links">
      <li class="nav-link">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="nav-link">
        <nuxt-link to="/blog">Posts</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>
nav.nav {
  display: flex;
  justify-content:space-between;
  background: #000;
  color: #fff;
  padding: 1em 100px;
  .nav-logo{
    display:flex;
    flex:0;
    a{
      display: flex;
      align-items: center;
    }
  }
  ul.nav-links{
    display:flex;
    flex:1;
    align-items:center;
    justify-content:flex-end;
    padding:0;
    li{
      display: inline-block;
      margin-left: 2rem;
    }
  }
  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

nav {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
