<template>
	<v-container full>
		<v-row>
			<v-col cols="6">
				
				<h2>{{ heading }}</h2></v-col>
			<v-col cols="2"></v-col>
			<v-col cols="3">
				<h3 class="section-head">
					Dependencies
				</h3>
				<ul>
					<li class="tag" v-for="listItem in listItems">{{ listItem }}</li>
				</ul>
			</v-col>
			<v-col cols="1"></v-col>
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
	      	"Nuxt",
	      	"Vue",
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
		padding-top:2rem;
		padding-bottom:5rem;
		h3{
			margin-bottom:2rem;
		}
		ul{
			
		}
		.tag{
			display:inline-block;
			margin-right:.4rem;
			margin-bottom:.5rem;
			padding: .6rem 1.2rem;
			font-size: 1rem;
			border:1px solid $grey;
  			border-radius:10rem;
  			&:hover{
  				border-color:$white;
  			}
		}
	}
</style>