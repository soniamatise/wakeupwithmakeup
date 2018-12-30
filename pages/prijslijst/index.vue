<template>
	<main class="page page--home">
		<l-header-image-full/>
		<l-section section-title="Prijslijst" section-content="Ik ben wat content"/>
		<div class="row center">
			<div class="column small-full medium-full large-20">
				<h3>Permanente make-up</h3>
				<table>
					<tr>
						<th>Wenkbrouwen</th>
						<th>Prijs</th>
					</tr>
					<tr>
						<td>Hairstroke-techniek, inclusief touch up na 6 weken</td>
						<td>320,-</td>
					</tr>
					<tr>
						<td>Hairstroke-techniek opfrisbehandeling binnen een jaar</td>
						<td>125,-</td>
					</tr>
					<tr>
						<td>Hairstroke-techniek opfrisbehandeling binnen twee jaar</td>
						<td>175,-</td>
					</tr>
					<tr>
						<td>Poedertechniek, inclusief touch up na 6 weken</td>
						<td>320,-</td>
					</tr>
					<tr>
						<td>Poedertechniek opfrisbehandeling binnen een jaar</td>
						<td>125,-</td>
					</tr>
					<tr>
						<td>Poedertechniek opfrisbehandeling binnen twee jaar</td>
						<td>175,-</td>
					</tr>
				</table>
				<p>Na 2 jaar betalen vaste klanten totaalprijs min 30%.</p>
				<table>
					<tr>
						<th>Eyeliner</th>
						<th>Prijs</th>
					</tr>
					<tr>
						<td>Boven het oog, inclusief touch up na 6 weken</td>
						<td>195,-</td>
					</tr>
					<tr>
						<td>XL eyeliner boven het oog, inclusief touch up na 6 weken</td>
						<td>225,-</td>
					</tr>
					<tr>
						<td>Onder het oog, inclusief touch up na 6 weken</td>
						<td>145,-</td>
					</tr>
					<tr>
						<td>Boven en onder het oog, inclusief touch up na 6 weken</td>
						<td>295,-</td>
					</tr>
					<tr>
						<td>Eyeliner opfrisbehandeling binnen een jaar</td>
						<td>50,-</td>
					</tr>
					<tr>
						<td>Eyeliner opfrisbehandeling binnen twee jaar</td>
						<td>100,-</td>
					</tr>
				</table>

				<h3>Wenkbrauwtreatment</h3>
				<table>
					<tr>
						<th/>
						<th>Prijs</th>
					</tr>
					<tr>
						<td>Wenkbrauwshapen</td>
						<td>20,-</td>
					</tr>
					<tr>
						<td>Wenkbrauwshapen, inclusief verven </td>
						<td>30,-</td>
					</tr>
				</table>
			</div>
		</div>
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
