<template>
	<picture>
		<source media="(min-width:650px)" :srcset="this.src">
		<source media="(min-width:465px)" :srcset="this.src">
		<img class="hover-image" :src="this.src">
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
	methods: {
		animateImageGrid() {
			var tl = gsap.timeline();
			document.querySelectorAll(".hover-image").forEach(function(element) {
			  var animation = gsap.timeline({ paused: true });

			  animation.to(element, {scale: 1.5, duration: .5, ease: "power1.inOut"});

			  element.addEventListener("mouseenter", function () {
			  	animation.play();
			  });
			  element.addEventListener("mouseleave", function () {
			  	animation.reverse();
			  });
			});
		}
	},
	mounted() {

	}
}
</script>

<style lang="scss">
picture{
  aspect-ratio: 16 / 9;
	display:block;
	overflow:hidden;
  img{
  	aspect-ratio: 16 / 9;
  	object-fit: cover;
  	will-change:transform;
  	transition:3s transform ease;
  	&:hover{
  		transform:scale(1.05);
  	}
	}
}
</style>