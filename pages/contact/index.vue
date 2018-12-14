<template>
	<main class="page page--home">
		<!-- <l-section :section-title="pageTitle" :section-content="pageContent" /> -->
		<!-- <l-image-text 
			:image1="require('~/static/images/home/maggy2.jpg')"
			:image2="require('~/static/images/home/eyebrowshape1.jpg')" 
			:image3="require('~/static/images/home/circleIcon_rose.png')"  
			title="hey" 
			content="info"/> -->
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
	// 	return axios.get(apiDomain + '/wp/v2/pages')	
	// 		.then(async result => {
	// 		let pageData = result.data;
	// 		console.log(pageData);
	// 		return {
	// 			// pageTitle: pageData.title.rendered,
	// 			// pageContent: pageData.content.rendered,
	// 		};
	// 		}, function(error){
	// 			console.error(error);
	// 		});
	// },
	// async asyncData() {
	// 	try {
    //         let page = await axios({
    //             method: 'get',
    //             url: apiDomain + '/wp/v2/pages',
    //         });
    //         console.log(page);
    //     } catch (err) {
	// 		console.error(err);
    //         //handle error message
	// 	}
    // }
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
