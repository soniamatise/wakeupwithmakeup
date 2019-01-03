<template>
	<main class="page page--contact">
		<l-header-image-full :image-bg="contactHeader"/>
		<l-section 
			section-title="Contact" 
			section-content="<p>Mocht je vragen hebben, neem dan vooral contact met me op. Een vrijblijvend consult behoort ook tot de mogelijkheden.</p>" 
		/>
	</main>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;
import lButton from '~/components/elements/l-button.vue';
import lSection from '~/components/elements/l-section.vue';
import lImageText from '~/components/elements/l-image-text.vue';
import lHeaderImageFull from '~/components/elements/l-header-image-full.vue';


export default {
	components: {
		lButton,
		lSection,
		lImageText,
		lHeaderImageFull
	},
	data() {
		return {
			contactHeader: require('~/static/images/headers/eyebrows.jpg'),
		};
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
