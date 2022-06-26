<template>
	<footer class="footer">
		<NuxtLink to="/">Home</NuxtLink>
	</footer>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>
footer.footer {
  display: flex;
  justify-content:space-between;
  background: $black;
  color: $white;
  padding: 1em 1.5em;
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