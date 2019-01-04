<template>
	<main class="page page--home">
		<l-header-image-full :image-bg="aboutHeader"/>
		<l-section section-title="About Maggy" section-content="
		<p>Welkom bij Wake Up With Makeup! Mag ik mij even voorstellen? Ik ben Maggy, permanent makeup artist uit Amsterdam. In 2013 heb ik de basisopleiding allround permanente make-up gevolgd, bij MB Cosmetics, omdat ik altijd al een voorliefde voor makeup heb gehad. Direct daarna ben ik gestart met het zetten van permanente makeup en doe ik dit nog steeds met veel plezier en overgave. Het is fantastisch om mensen een nieuwe look te geven en te zien stralen na een afspraak….</p>
		<p>Ik ben voorstander van een natuurlijke look, ik zoek samen met mijn klant de vorm en kleur uit, wat bij het gezicht past, voor zowel de wenkbrauwen, eyeliner en lippen. Ik volg hierin geen modetrends, als iets “in” is, wil dat niet zeggen dat het goed bij iemands gezicht past. 
		</p>"/>
		<l-image-section :image1="maggy1" :image2="maggy2"/>
		<l-section section-content="
			<p>Inmiddels heb ik mijn basiskennis opgefrist met de volgende masterclasses: </p>
			<ul>
				<li>2014 Hairstrokes Irma Hulscher, Almere</li>
				<li>2015 Hairstrokes Mary Richardson, Naturalines USA</li>
				<li>2015 Eyeliner, Zina, BE</li>
				<li>2015 Threading, Royal Secret Cosmetics</li>
				<li>2017 Poeder wenkbrauwen, Studio Elegance, Den Haag</li>
				<li>2018 Wenkbrauwshaping, Brows by Sam, Amsterdam</li>
			</ul>"/>
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';
import lHeaderImageFull from '~/components/elements/l-header-image-full.vue';
import lImageSection from '~/components/elements/l-image-section.vue';



export default {
	components: {
		lButton,
		lSection,
		lHeaderImageFull,
		lImageSection
	},
	data() {
		return {
			aboutHeader: require('~/static/images/headers/about.jpg'),
			maggy1: require('~/static/images/about/maggy1.png'),
			maggy2: require('~/static/images/about/maggy2.jpg'),
		};
	},
};
</script>

<style lang="scss">	
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.intro {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
