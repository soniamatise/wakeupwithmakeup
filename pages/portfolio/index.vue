<template>
	<main class="page page--portfolio">
		<l-section section-title="Portfolio" section-content="" />
		<l-image-section :image1="dorien" :image2="eyeliner"/>
		<l-image-section :image1="hairstrokes1" :image2="hairstrokes2" :image3="hairstrokes3" section-title="Hairstrokes"/>
		<l-image-section :image1="hairstrokes4" :image2="hairstrokes5" :image3="hairstrokes6"/>
		<l-image-section :image1="powderbrow" :image2="powderbrow1" section-title="Powderbrow"/>
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
			dorien: require('~/static/images/portfolio/dorien.jpg'),
			eyeliner: require('~/static/images/portfolio/eyeliner.jpg'),
			hairstrokes1: require('~/static/images/portfolio/hairstrokes1.jpg'),
			hairstrokes2: require('~/static/images/portfolio/hairstrokes2.jpg'),
			hairstrokes3: require('~/static/images/portfolio/hairstrokes3.jpg'),
			hairstrokes4: require('~/static/images/portfolio/hairstrokes4.jpg'),
			hairstrokes5: require('~/static/images/portfolio/hairstrokes5.jpg'),
			hairstrokes6: require('~/static/images/portfolio/hairstrokes6.jpg'),
			powderbrow: require('~/static/images/portfolio/powderbrow.jpg'),
			powderbrow1: require('~/static/images/portfolio/powderbrow1.jpg'),
		};
	},
};
</script>

<style lang="scss">	
@import '~tools';

.page {
	// general page styles
	&--portfolio {
		// specific home styles
	}
}

</style>
