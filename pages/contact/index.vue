<template>
	<main class="page page--contact">
		<l-header-image-full :image-bg="contactHeader"/>
		<l-section 
			section-title="Contact" 
			section-content="<p>Mocht je vragen hebben, neem dan vooral contact met me op. Een vrijblijvend consult behoort ook tot de mogelijkheden.</p>">
			
			<ul class="contact-information">
				<li><p><i class="fa fa-phone"/><a href="tel:0623100230">06-23100230</a></p></li>
				<li><p><i class="fa fa-facebook"/><a target="_blank" href="https://www.facebook.com/makeubymaggy/">facebook.com/makeubymaggy</a></p></li>
				<li><p><i class="fa fa-instagram"/><a target="_blank" href="http://instagram.com/wakeupwithmakeup_amsterdam/">@wakeupwithmakeup_amsterdam</a></p></li>
				<li><p><i class="fa fa-envelope"/><a href="mailto:maggy@wakeupwithmakeup.nl">maggy@wakeupwithmakeup.nl</a></p></li>
			</ul>	

		</l-section>
		
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
	// 	return axios.get(apiDomain + '/wp/v2/pages/15').then(async result => {
	// 		let pageData = result.data;
	// 		console.log(pageData);
	// 		// return {
	// 		// 	pageTitle: pageData.title.rendered,
	// 		// 	pageContent: pageData.content.rendered,
	// 		// };
	// 	});
	// },
};
</script>

<style lang="scss">	
@import '~tools';

.page {
	&--contact {
		ul.contact-information {
			li {
				width: 100%;
				i {
					text-align: center;
					width: 20px;
					margin-right: 5px;
				}
			}
		}
	}
}

</style>
