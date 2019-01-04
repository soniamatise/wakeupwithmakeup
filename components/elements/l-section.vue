<template>
	<div class="row center small-full medium-full large-20 section-container">
		<section class="section column">
			<h2 class="section__title">{{ sectionTitle }}</h2>
			<div class="section__content" v-html="sectionContent"/>
			<slot/>
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
			padding-bottom: 3rem;
		}
	}
}

</style>
