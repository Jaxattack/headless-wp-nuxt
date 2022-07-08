<template>
	<v-container full>
		<v-row>
			<v-col cols="5"><h2>{{ heading }}</h2></v-col>
			<v-col cols="3"></v-col>
			<v-col cols="4">
				<h3 class="section-head">
					Dependencies
				</h3>
				<ul>
					<li v-for="listItem in listItems">{{ listItem }}</li>
				</ul>
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
	      listItems: [
	      	"SASS",
	      	"GSAP",
	      	"Vuetify Grid",
	      	"Adobe Fonts"
	      ]
	    };
	  },
	}
</script>

<style lang="scss" scoped>
	.container{
		padding-top:3rem;
		padding-bottom:6rem;
		h3{
			margin-bottom:2rem;
		}
		ul{
			
		}
	}
</style>