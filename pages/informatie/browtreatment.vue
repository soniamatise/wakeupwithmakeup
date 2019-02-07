<template>
	<main class="page page--informatie">
		<l-section 
			section-content="
				<h4>Algemene informatie Browtreatment</h4>
				<h5>Eyebrowshaping</h5>
				<p>Een goed gevormde wenkbrauw geeft je direct een verzorgd uiterlijk, een open oogopslag en kan een liftend effect hebben op je gezicht. Een eyebrowshaping geeft je wenkbrauwen die precies bij jouw gezicht passen (vorm, bot-structuur, huidteint en haarkleur). Heb je te weinig haren, hele zware, ongelijke of hele lichte wenkbrauwen. dan is een eyebrow treatment echt iets voor jou.
				</p>"
		/>
		<l-image-section :image1="eyebrowshaping1" :image2="eyebrowshaping2" :image3="eyebrowshaping3"/>
		<l-section 
			section-content="<h5>Threading</h5>
				<p>Epileren met een katoenen draad of touw wordt ook wel threading genoemd. Door deze zachte manier van ontharen is threading ideaal voor de gevoelige huid en alle delen van het gezicht. Zelfs fijne donshaartjes worden meegenomen, wat zorgt voor een snel en nauwkeurig resultaat. De haren breken niet af, maar worden met wortel en al uit het zakje getrokken. Het kost tijd om weer een nieuw haartje te laten ontstaan. Dit kan wel 6 weken duren.
				</p>"
		/>
		<l-section 
			section-content="<h5>Verven</h5>
			<p>Is permanente make-up nog een te grote stap? Verven is een tijdelijke oplossing voor wat meer definitie in je wenkbrauwen. Door wenkbrauwen te laten verven kan zelfs aan de lichtste haartjes weer definitie gegeven worden en hierdoor zien je wenkbrauwen er voller uit en komt de vorm beter uit.
			</p>"
		/>		
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
	asyncData({ params, error }) {
		// return axios.get(apiDomain + '/wp/v2/pages/6').then(async result => {
		// 	let pageData = result.data;
		// 	return {
		// 		pageTitle: pageData.title.rendered,
		// 		pageContent: pageData.content.rendered,
		// 	};
		// });
	},
	data() {
		return {
			infoHeader: require('~/static/images/headers/work.jpg'),			
			eyebrowshaping1: require('~/static/images/info/eyebrowshape1.jpg'),
			eyebrowshaping2: require('~/static/images/info/eyebrowshape2.jpg'),
			eyebrowshaping3: require('~/static/images/info/eyebrowshape3.png'),

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
