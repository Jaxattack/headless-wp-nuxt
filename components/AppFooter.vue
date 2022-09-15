<template>
	<footer class="footer">
		<ul class="footer-links">
      <li v-for="footerlink in this.footerlinks" :key="footerlink.label" class="footer-link">
        <nuxt-link :id="footerlink.link" :to="footerlink.to">{{ footerlink.label }}</nuxt-link>
        <span :v-if="footerlink.comma">{{ footerlink.comma }}</span> 
      </li>
    </ul>
	</footer>
</template>

<script>
  export default {
    data() {
      return{
        footerlinks: [
          { to: '/about', label: 'About', link: 'about-footer-link', comma: "," },
          { to: '/blog', label: 'Posts', link: 'about-posts-link', comma: "," },
          { to: '/contact', label: 'Contact', link: '', comma: "." },
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
  font-family:'termina';
  ul.footer-links{
    display:flex;
    flex:1;
    align-items:flex-end;
    justify-content: flex-end;
    flex-direction:column;
    padding:0;
    li{
      font-size:3em;
      line-height:1.25;
      font-weight: 400;
      letter-spacing: 0em;
      display:flex;
      a{
        letter-spacing:-0.06em;
      }
    }
  }
}
</style>