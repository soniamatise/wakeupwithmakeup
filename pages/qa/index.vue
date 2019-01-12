<template>
	<main class="page page--qa">
		<!-- <l-header-image-full :image-bg="infoHeader"/> -->
		<l-section section-title="Q&A" section-content="" />
		<div class="row center">
			<div class="column small-full medium-full large-20 qa-inner">
				<l-question-answer question="Hoelang blijft permanente make-up zitten?" answer="Het advies is om na een jaar een touch up te doen, in de loop van de tijd zal de permanente make-up geleidelijk vervagen. Veel zonlicht (ook zonnebanken) versnelt dit proces. Gebruik dan altijd een sunblock met hoge factor 30+. Ook hangt het af van het huidtype, leeftijd en in welke conditie de huid is en hoe u er zelf mee omgaat. Peelings, fruitzuurbehandelingen zijn ook nadelig voor de houdbaarheid van PMU."/>
				<l-question-answer question="Permanente make-up…… en zon" answer="Het advies is om niet vlakvoor een zonvakantie permanente make-up te laten zetten. Bescherm uw permanente make-up in de zon met een beschermingsfactor 30+ of hoger. "/>
				<l-question-answer question="Permanente make-up…… en chemokuur" answer="Tijdens of vlak na de chemokuur kunnen de wenkbrauw- en wimperhaartjes uitvallen. Alvorens u de chemokuur krijgt, kunt u de keuze maken om permanente make-up te zeten. Het is ten alle tijden verstandig om uw behandelend arts op de hoogte te stellen van de behandeling die u wilt ondergaan en hem/haar om advies te vragen."/>
				<l-question-answer question="Ik heb permanente make-up vanuit een andere salon en wil een afspraak" answer="Een touch up van elders gezette permanente make-up kan vaak, maar niet altijd. Neem contact met me op en dan plannen we een consult. "/>
			</div>
		</div>
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';
import lQuestionAnswer from '~/components/elements/l-question-answer.vue';
import lHeaderImageFull from '~/components/elements/l-header-image-full.vue';


export default {
	components: {
		lButton,
		lSection,
		lQuestionAnswer,
		lHeaderImageFull
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
		};
	},
};
</script>

<style lang="scss">	
@import '~tools';

.page {
	// general page styles
	&--qa {

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
