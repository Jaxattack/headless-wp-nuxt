<template>
	<picture>
		<source media="(min-width:650px)" :srcset="this.src">
		<source media="(min-width:465px)" :srcset="this.src">
		<img id="scroll-image" :src="this.src" style="width:100%;">
	</picture>
</template>

<script>
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
	    	console.log(window);
	    	let image = document.getElementById('scroll-image');
			let scrollY = window.scrollY;

			image.style.transform = `scale(${scrollY * 0.0002 + 1})`;
	    }
	}
}
</script>

<style lang="scss" scoped>
picture{
	overflow:hidden;
	display: flex;
	width:100%;
	img{
		&:hover{
			transform:scale(2);
		}
	}
}
</style>