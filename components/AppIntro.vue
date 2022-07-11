<template>
	<v-container full class="intro-container">
		<v-row>
			<v-col cols="6">
				<h2 class="heading2">{{ heading }}</h2>
			</v-col>
			<v-col cols="1"></v-col>
			<v-col cols="5">
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Intro',
	props: ['heading','copy'],
	data() {
		return {
			pageLoaded: false,  // animate with the second 'to' tween in mounted.
		};
	},
	methods: {

	},
	created() {

	},
	mounted() {
		
	}
}
</script>

<style lang="scss" scoped>
	.intro-container{
		padding-top:0rem;
		h3{
			margin-bottom:2rem;
		}
	}
</style>