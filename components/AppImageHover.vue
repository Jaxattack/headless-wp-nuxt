<template>
	<picture>
		<source media="(min-width:650px)" :srcset="this.src">
		<source media="(min-width:465px)" :srcset="this.src">
		<img class="hover-image" :src="this.src" style="width:100%;">
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
}
</script>

<style lang="scss" scoped>
picture{
	overflow:hidden;
	display: flex;
	width:100%;
	height:33vh;
	border-radius:0.3em;
}
img{
	object-fit: cover;
	transform:scale(1.03);
	will-change: transform;
	transition: transform 600ms ease;
	&:hover{
		transform: scale(1);
	}
}
</style>