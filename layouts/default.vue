<template>
	<div class="layout layout-default">
		<l-stars />
		<l-header />
		<nuxt />
		<l-socials />
		<l-footer />
	</div>
</template>

<script>
import lHeader from '~/components/layout/l-header.vue';
import lFooter from '~/components/layout/l-footer.vue';
import lSocials from '~/components/layout/l-socials.vue';
import lStars from '~/components/animations/l-stars.vue';


export default {
	components: {
		lHeader,
		lFooter,
		lSocials,
		lStars
	}
};
</script>
