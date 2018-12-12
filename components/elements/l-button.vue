<template>
	<div class="">
		<nuxt-link :to="buttonUrl" class="button">
			<span class="main-nav__text">{{ buttonText }}</span>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ['buttonUrl', 'buttonText']
};
</script>

<style lang="scss">
@import '~tools';

.button {
	padding: 1rem 0;
	// Header styles
	.main-nav {
		&__list {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
	}
}
</style>
