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

	},
	transition: {
    name: "bounce",
    mode: "in-out", // default is out-in
    appear: true, // default is false
  }
}
</script>

<style lang="scss">
picture{
  aspect-ratio: 16 / 9;
	display:block;
	overflow:hidden;
	position:relative;
  img{
  	aspect-ratio: 16 / 9;
  	object-fit: cover;
  	will-change:transform;
  	transition:3s transform ease;
  	&:hover{
  		transform:scale(1.05);
  	}
	}
	&:after{
		content:"";
		display:block;
		width:100%;
		height:100%;
		position:absolute;
		top:0;left:0;right:0;bottom:0;
		z-index:10;
		pointer-events:none;
		background: linear-gradient(0deg, rgba(0,0,0,0.2721463585434174) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 100%);
	}
}
</style>