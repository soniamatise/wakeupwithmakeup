<template>
	<main class="page page--home">
		<!-- ? -->
		<l-button button-url="/go" button-text="Kaas"/>
	</main>
</template>

<script>
import lButton from '~/components/elements/l-button.vue';

export default {
	components: {
		lButton,
	}
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
