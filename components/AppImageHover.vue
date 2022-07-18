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

<style lang="scss" Wscoped>
picture{
	overflow:hidden;
	display: flex;
	width:100%;
	border-radius:0.4em;
  aspect-ratio: 16 / 9;
  img{
		object-fit: cover;
		will-change: transform;
	}
	&:hover{
  	img{
			transform: scale(1.03);
		}
	}
}

</style>