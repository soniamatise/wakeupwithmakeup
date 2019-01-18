<template>
	<main class="page page--informatie">
		<!-- <l-header-image-full :image-bg="infoHeader"/> -->
		<l-section 
			section-title="Algemene informatie permanente make-up" 
			section-content="
				<h4>Permanente make-up</h4>
				<p>Permanente make-up (PMU) is het inbrengen van pigmenten in het gezicht (denk aan wenkbrauwen, lippen en eyeliner) door 1 of meerdere fijne naaldjes. Permanente make-up lijkt op tatoeëren. Een tatoeage wordt echter in het onderhuids bindweefsel geplaatst, dit is echt permanent. Permanente make-up wordt in de lederhuid geplaatst. Deze pigmentatie is hierdoor eigenlijk niet echt permanent, het zal geleidelijk vervagen, omdat de huid steeds nieuwe cellen blijft aanmaken. Zon bijvoorbeeld heeft ook invloed op hoe snel het pigment vervaagt. Een touch up na een jaar of anderhalf jaar wordt geadviseerd. Het aanbrengen van permanente make-up omvat 2 behandelingen. Direct na de eerste behandeling is de pigmentatie iets donkerder dan gewenst. Vier dagen na de pigmentatie zal het lichter worden, dit kan gepaard gaan met kleine korstjes of schilfers. Na deze afstoting ziet de pigmentatie er weer iets te licht uit. Na minimaal 6 tot 8 weken vindt de tweede behandeling plaats. Hierbij kunnen nog correcties aangebracht worden in vorm en kleur.</p>
				<h5>Voor wie is permanente make-up geschikt?</h5>
				<p>Voor elke moderne vrouw die er graag verzorgd uit wilt zien op elk moment van de dag. Gewone make-up blijft niet altijd de hele dag mooi, daarom kiest de vrouw van tegenwoordig voor permanente make-up. Voor iemand die veel aan sport doet, allergisch is voor make-up, weinig tijd voor make-up heeft, Alopecia heeft of een chemokuur krijgt of heeft gehad (zie kopje permanente make-up en chemokuur) is het een absolute aanrader.  Permanente make-up is voor bijna iedereen geschikt (zie ook `contra-indicaties`).</p>
				"	
		/>
		<l-section 
			section-content="
				<h4>Browtreatment</h4>
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
		<!-- <l-image-section/> -->
		<l-section 
			section-content="<h5>Verven</h5>
			<p>Is permanente make-up nog een te grote stap? Verven is een tijdelijke oplossing voor wat meer definitie in je wenkbrauwen. Door wenkbrauwen te laten verven kan zelfs aan de lichtste haartjes weer definitie gegeven worden en hierdoor zien je wenkbrauwen er voller uit en komt de vorm beter uit.
			</p>"
		/>
		<!-- <l-image-section/> -->
		
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
