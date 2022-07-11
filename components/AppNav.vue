<template>
  <nav class="nav">
    <div class="nav-logo">
      <nuxt-link exact to="/">
        <app-icon></app-icon>
      </nuxt-link>
    </div>
    
    <ul class="nav-links">
      <li v-for="navLink in this.navLinks" :key="navLink.label" class="nav-link">
        <nuxt-link :to="navLink.to">{{ navLink.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  data() {
    return{
      navLinks: [
        { to: '/about', label: 'About' },
        { to: '/blog', label: 'Posts' },
        { to: '/contact', label: 'Contact' },
      ]
    }
  },
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>
nav {
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  display: flex;
  align-items: center;
  height: 4em;
  width: 100%;
  justify-content:space-between;
  background: $black;
  color: $white;
  border-bottom:.5px solid $grey;
  padding: 1em 1.5em;
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
    color: $white;
    &:hover {
      opacity: 1;
    }
    &.nuxt-link-exact-active{
      text-decoration:underline;
      text-decoration-line: all;
    }
  }
}
</style>
