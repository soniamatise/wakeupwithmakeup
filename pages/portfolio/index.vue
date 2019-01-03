<template>
	<main class="page page--home">
		<l-header-image-full :image-bg="portfolioHeader"/>
		<l-section section-title="Portfolio" section-content="Ik ben wat content" />
		<!-- <l-button button-url="/go" button-text="Kaas"/> -->
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';
import lHeaderImageFull from '~/components/elements/l-header-image-full.vue';


export default {
	components: {
		lButton,
		lSection,
		lHeaderImageFull
	},
	// asyncData({ params, error }) {
	// 	return axios.get(apiDomain + '/wp/v2/pages/6').then(async result => {
	// 		let pageData = result.data;
	// 		return {
	// 			pageTitle: pageData.title.rendered,
	// 			pageContent: pageData.content.rendered,
	// 		};
	// 	});
	// },
	data() {
		return {
			portfolioHeader: require('~/static/images/headers/eyebrows.jpg'),
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
