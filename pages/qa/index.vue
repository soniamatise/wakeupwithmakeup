<template>
	<main class="page page--home">
		<l-section section-title="Home" section-content="Ik ben wat content" />
		<div class="row center">
			<div class="column small-full medium-full large-20 image-text">
				<l-question-answer/>
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


export default {
	components: {
		lButton,
		lSection,
		lQuestionAnswer
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
