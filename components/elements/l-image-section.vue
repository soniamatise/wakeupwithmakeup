<template>
	<div class="row center small-full medium-full large-20 image-section-container">
		<section class="section column">
			<div :style="`background-image: url('${ image1 }')`" class="image" />
			<div :style="`background-image: url('${ image2 }')`" class="image" />
			<div v-if="image3" :style="`background-image: url('${ image3 }')`" class="image" />
		</section>
	</div>
</template>

<script>
export default {
	props: ['image1', 'image2','image3'],
};
</script>

<style lang="scss">
@import '~tools';

.image-section-container {
	.section {
		display: flex;
		.image {
			width: 100%;
			height: 300px;
			background-color: color(Dark);
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
		}
	}
}


</style>