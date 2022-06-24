<template>
	<picture>
		<source media="(min-width:650px)" :srcset="this.src">
		<source media="(min-width:465px)" :srcset="this.src">
		<img class="scroll-image" :src="this.src" style="width:100%;">
	</picture>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
	props: ['src'],
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
	    handleScroll(event) {
	    	let image = document.querySelectorAll('scroll-image');
	    	let scrollY = window.scrollY;

	    	document.querySelectorAll('.scroll-image').forEach(function(image) {
	    		image.style.transform = `scale(${1 + scrollY * 0.00008})`;
	    	});
	    }
	}
}
</script>

<style lang="scss" scoped>
picture{
	overflow:hidden;
	display: flex;
	width:100%;
}
img{
	object-fit: cover;
}
</style>