<template>
	<main class="page page--home">
		<l-image-text 
			:image1="require('~/static/images/home/maggy2.jpg')"
			:image2="require('~/static/images/home/eyebrowshape1.jpg')" 
			:image3="require('~/static/images/home/circleIcon_rose.png')"  
			title="SAY YES TO SMUDGEPROOF MAKEUP!" 
			tag-text="Maggy Zingstok"
			content="<p>Welkom bij Wake Up With Makeup! Mag ik mij even voorstellen? Ik ben Maggy, permanent makeup artist uit Amsterdam.</p>"/>
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';
import lImageText from '~/components/elements/l-image-text.vue';


export default {
	components: {
		lButton,
		lSection,
		lImageText,
	},
	// asyncData({ params, error }) {
	// 	return axios.get(apiDomain + '/wp/v2/pages/6').then(async result => {
	// 		let pageData = result.data;
	// 		console.log(pageData);
	// 		return {
	// 			pageTitle: pageData.title.rendered,
	// 			pageContent: pageData.content.rendered,
	// 		};
	// 	});
	// },
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
</style>
