<template>
	<footer class="footer">
		<ul class="footer-links">
      <li v-for="footerlink in this.footerlinks" :key="footerlink.label" class="footer-link">
        <nuxt-link :to="footerlink.to">{{ footerlink.label }}</nuxt-link>
        <span :v-if="footerlink.comma">{{ footerlink.comma }}&nbsp;</span> 
      </li>
    </ul>
	</footer>
</template>

<script>
  export default {
    data() {
      return{
        footerlinks: [
          { to: '/about', label: 'About', comma: "," },
          { to: '/blog', label: 'Posts', comma: "," },
          { to: '/contact', label: 'Contact', comma: "." },
        ]
      }
    },
  };
</script>

<style lang="scss" scoped>
footer.footer {
  display: flex;
  justify-content:space-between;
  background: $black;
  border-top:.5px solid $grey;
  color: $white;
  padding: 1em 1.5em;
  height:calc(100vh - 4em);
  ul.footer-links{
    display:flex;
    flex:1;
    align-items:flex-end;
    justify-content: flex-end;
    flex-direction:column;
    padding:0;
    li{
      font-size:3.5em;
      line-height:1.15;
      font-weight: 400;
      letter-spacing: 0em;
      display:flex;
    }
  }
  a {
  }
}

nav {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}
</style>