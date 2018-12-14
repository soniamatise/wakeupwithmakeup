<template>
	<div class="layout layout-default">
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


export default {
	components: {
		lHeader,
		lFooter,
		lSocials
	}
};
</script>
