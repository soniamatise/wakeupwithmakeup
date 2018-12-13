<template>
	<main class="page page--home">
		<l-section section-title="Home" section-content="Ik ben wat content" />
		<l-button button-url="/go" button-text="Kaas"/>
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';


export default {
	components: {
		lButton,
		lSection,
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
	&--contact {
		// specific home styles
	}
}

</style>
