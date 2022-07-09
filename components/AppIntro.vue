<template>
	<v-container full>
		<v-row>
			<v-col cols="6">
				
				<h2>{{ heading }}</h2></v-col>
			<v-col cols="2"></v-col>
			<v-col cols="4">
				<ul>
					<li class="tag" v-for="listItem in listItems">{{ listItem }}</li>
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
	      	"Nuxt",
	      	"VueJS",
	      	"SASS",
	      	"Greensock Animation Plugin",
	      	"Vuetify Grid",
	      	"Adobe Fonts"
	      ]
	    };
	  },
	}
</script>

<style lang="scss" scoped>
	.container{
		padding-top:1rem;
		padding-bottom:8rem;
		h3{
			margin-bottom:2rem;
		}
		ul{
			
		}
		.tag{
			font-family: neue-haas-grotesk-display, sans-serif;
			display:inline-block;
			margin-right:.3rem;
			margin-bottom:.4rem;
			padding: .6rem 1.4rem;
			font-size: 1.6vw;
			border:1px solid $grey;
  			border-radius:10rem;
  			&:hover{
    			background:$grey;
  			}
		}
	}
</style>