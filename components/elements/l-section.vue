<template>
	<div class="row center small-full medium-full large-18 section-container">
		<section class="section column">
			<h2 class="section__title">{{ sectionTitle }}</h2>
			<!-- <h3>{{ sectionSubtitle }}</h3> -->
			<div class="section__content" v-html="sectionContent"/>
		</section>
	</div>
</template>

<script>
export default {
	props: ['sectionTitle', 'sectionSubtitle','sectionContent', 'sectionFull'],
};
</script>

<style lang="scss">
@import '~tools';

.section-container {
	.section {
		// width: 100%;
		&__title {

		}
		&__content {

		}
	}
}

</style>
