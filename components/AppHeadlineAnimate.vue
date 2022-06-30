<template>
	<h1>{{ theHeading }}</h1>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
	computed: {
		theHeading() {
            return this.$store.state.headlineAnimate;
        }
	},
	transition: {
		name: "fade",
		mode: "out-in"
	}
}
</script>

<style>
.fade-enter-active {
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1),
    color 3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-active {
  transition: transform 1s cubic-bezier(1, 0.5, 0.8, 1),
    color 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter {
  color: mediumblue;
  transform: translateY(20px);
}
.fade-leave-to {
  transform: translateX(100px);
  color: cyan;
}
</style>